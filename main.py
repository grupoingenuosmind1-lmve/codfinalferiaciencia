matriz = [
    [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
    [0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1],
    [0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0],
    [1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1],
    [0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1],
    [0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1],
    [0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0],
    [1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
    [0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1],
    [0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0],
    [1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0],
    [1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1],
    [0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0],
    [1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
    [0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0],
    [1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1],
    [0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]
]

coords_inicio = [1, 1]
coords_fin = [23, 23]
rotacion_inicio = 2
VECTORES = [
   [0,  -1], #NORTE
   [1, 0], #ESTE
   [0,  1], #SUR
   [-1, 0]  #OESTE
];

coins = [
    [3, 9],
    [7, 15],
    [13, 9],
    [23, 5],
    [21, 19]
]

coins_sin_tomar = coins[:]
coins_tomadas = [[0, 0]]
coins_tomadas.pop()

scr_intervals = 50
scr_timeouts = 400
adel_timeout = 1300
girar_timeout = 900

#scr_intervals = 1
#scr_timeouts = 1
#adel_timeout = 1
#girar_timeout = 1

x = coords_inicio[0]
y = coords_inicio[1]
rotacion = rotacion_inicio
manual = False
completado = False

def conexion_genibot():
  radio.set_group(1)
  radio.set_frequency_band(1)

def revisar_coin():
    global coins_sin_tomar, coins_tomadas
    for coin in coins_sin_tomar:
        if coin[0] == x and coin[1] == y:
            coins_sin_tomar.remove(coin)
            coins_tomadas.append(coin)
            return True
    return False

def avanzar():
  global x, y, rotacion
  dx = VECTORES[rotacion][0]
  dy = VECTORES[rotacion][1]

  pared_x = x + dx
  pared_y = y + dy

  if matriz[pared_y][pared_x] == 1:
      return False

  x = x + dx * 2
  y = y + dy * 2
  
  if(revisar_coin()):
      mostrar_coin()

  radio.send_string("move,5,8")
  serial.write_line(str(x)+","+str(y)+","+str(len(coins_tomadas)))

  return True

def girar(direccion): # 1 DERECHA, -1 IZQUIERDA
  global rotacion
  
  if direccion != -1 and direccion != 1:
      return

  rotacion = (rotacion + direccion + 4) % 4
  
  radio.send_string("turn," + str(direccion * 5) + ",90")

def llego_meta():
    global completado

    fin_x=coords_fin[0]
    fin_y=coords_fin[1]

    if(x==fin_x and y==fin_y):
        completado=True
    
    return completado

def reset_all():
    global x, y, rotacion, manual, completado, coins_sin_tomar, coins_tomadas

    inicio_x = coords_inicio[0]
    inicio_y = coords_inicio[1]

    x = inicio_x
    y = inicio_y
    rotacion = rotacion_inicio

    manual = False
    completado = False

    coins_sin_tomar = coins[:]
    coins_tomadas = [[0, 0]]
    coins_tomadas.pop()

def mostrar_coords():
    basic.show_number(x, scr_intervals)
    basic.pause(scr_timeouts)
    basic.clear_screen()
    basic.show_number(y, scr_intervals)
    basic.pause(scr_timeouts)
    basic.clear_screen()

def mostrar_rotacion():
    letras = ["N", "E", "S", "W"]
    basic.show_string(letras[rotacion], scr_intervals)
    basic.pause(scr_timeouts)
    basic.clear_screen()

def mostrar_error():
    basic.show_icon(IconNames.NO)
    basic.pause(scr_timeouts)
    basic.clear_screen()

def mostrar_completado():
    basic.show_icon(IconNames.YES)
    basic.pause(scr_timeouts)
    basic.show_icon(IconNames.HAPPY)
    basic.pause(scr_timeouts)
    basic.clear_screen()

def mostrar_manual():
    basic.show_string("M" if manual else "A")
    basic.pause(scr_timeouts)
    basic.clear_screen()

def mostrar_coin():
    basic.show_icon(IconNames.DIAMOND)
    basic.pause(scr_timeouts)
    basic.clear_screen()

def izquierda(j=1):
    for i in range(j):
        girar(-1)
        mostrar_rotacion()
        basic.pause(girar_timeout)

def on_gesture_tilt_left():
    if(manual): izquierda(1)
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def derecha(j=1):
    for i in range(j):
        girar(1)
        mostrar_rotacion()
        basic.pause(girar_timeout)

def on_gesture_tilt_right():
    if(manual): derecha(1)
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def adelante(j=1):
    for i in range(j):
        if(avanzar()):
            mostrar_coords()
        else:
            mostrar_error()

        basic.pause(adel_timeout)

def on_gesture_logo_down():
    if(manual): adelante(1)
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

def on_button_pressed_a():
    if(completado):
        reset_all()
    else:
        if not llego_meta():
            mostrar_error()

    basic.pause(50)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global manual
    manual = not manual

    mostrar_manual()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    if(completado): mostrar_completado()
forever(on_forever)

conexion_genibot()

def on_button_pressed_ab():
    if(manual): return None

    # BIFURCACION 1

    adelante(3)
    izquierda()
    adelante()
    derecha()
    adelante()
    ### 1
    derecha()
    adelante()
    izquierda()
    adelante(2)
    izquierda()
    adelante(3)
    derecha()
    adelante()
    ### 2

    # DEVUELTA BIFURCACION 1

    derecha(2)

    adelante()
    izquierda()
    adelante(3)
    derecha()
    adelante(2)
    derecha()
    adelante()
    izquierda()
    adelante()
    izquierda()
    adelante()
    derecha()
    adelante(3)

    derecha()

    # VIA PRINCIPAL

    adelante(7)
    derecha()
    adelante()
    izquierda()
    adelante()
    derecha()
    adelante(4)
    derecha()
    adelante()

    # BIFURCACION 2

    derecha()
    
    adelante()
    izquierda()
    adelante()
    ### 3

    # DEVUELTA BIFURCACION 2

    derecha(2)

    adelante()
    derecha()
    adelante()

    # VIA PRINCIPAL

    adelante(3)

    # BIFURCACION 3

    izquierda()

    adelante()
    izquierda()
    adelante(2)
    derecha()
    adelante()
    izquierda()
    adelante()
    derecha()
    adelante(2)
    izquierda()
    adelante(3)
    ### 4

    # DEVUELTA BIFURCACION 3

    derecha(2)

    adelante(3)
    derecha()
    adelante(2)
    izquierda()
    adelante()
    derecha()
    adelante()
    izquierda()
    adelante(2)
    derecha()
    adelante()

    izquierda()

    # VIA PRINCIPAL

    adelante()
    derecha()
    adelante()
    izquierda()
    adelante()
    izquierda()
    adelante(4)
    derecha()
    adelante()
    izquierda()
    adelante()
    
    # BIFURCACION 4

    izquierda()

    adelante(2)
    izquierda()
    adelante()
    ### 5

    # DEVUELTA BIFURCACION 4

    derecha(2)

    adelante()
    derecha()
    adelante(2)
    ### FIN
input.on_button_pressed(Button.AB, on_button_pressed_ab)