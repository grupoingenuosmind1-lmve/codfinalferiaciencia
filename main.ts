let matriz = [[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1], [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1], [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1], [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]]
let coords_inicio = [1, 1]
let coords_fin = [23, 23]
let rotacion_inicio = 2
let VECTORES = [[0, -1], [1, 0], [0, 1], [-1, 0]]
// NORTE
// ESTE
// SUR
// OESTE
let coins = [[3, 9], [7, 15], [13, 9], [23, 5], [21, 19]]
let coins_sin_tomar = coins.slice(0)
let coins_tomadas = [[0, 0]]
_py.py_array_pop(coins_tomadas)
let scr_intervals = 50
let scr_timeouts = 400
let adel_timeout = 1300
let girar_timeout = 900
// scr_intervals = 1
// scr_timeouts = 1
// adel_timeout = 1
// girar_timeout = 1
let x = coords_inicio[0]
let y = coords_inicio[1]
let rotacion = rotacion_inicio
let manual = false
let completado = false
function conexion_genibot() {
    radio.setGroup(1)
    radio.setFrequencyBand(1)
}

function revisar_coin(): boolean {
    
    for (let coin of coins_sin_tomar) {
        if (coin[0] == x && coin[1] == y) {
            coins_sin_tomar.removeElement(coin)
            coins_tomadas.push(coin)
            return true
        }
        
    }
    return false
}

function avanzar(): boolean {
    
    let dx = VECTORES[rotacion][0]
    let dy = VECTORES[rotacion][1]
    let pared_x = x + dx
    let pared_y = y + dy
    if (matriz[pared_y][pared_x] == 1) {
        return false
    }
    
    x = x + dx * 2
    y = y + dy * 2
    if (revisar_coin()) {
        mostrar_coin()
    }
    
    radio.sendString("move,5,8")
    serial.writeLine("" + x + "," + ("" + y) + "," + ("" + coins_tomadas.length))
    return true
}

function girar(direccion: number) {
    //  1 DERECHA, -1 IZQUIERDA
    
    if (direccion != -1 && direccion != 1) {
        return
    }
    
    rotacion = (rotacion + direccion + 4) % 4
    radio.sendString("turn," + ("" + direccion * 5) + ",90")
}

function llego_meta(): boolean {
    
    let fin_x = coords_fin[0]
    let fin_y = coords_fin[1]
    if (x == fin_x && y == fin_y) {
        completado = true
    }
    
    return completado
}

function reset_all() {
    
    let inicio_x = coords_inicio[0]
    let inicio_y = coords_inicio[1]
    x = inicio_x
    y = inicio_y
    rotacion = rotacion_inicio
    manual = false
    completado = false
    coins_sin_tomar = coins.slice(0)
    coins_tomadas = [[0, 0]]
    _py.py_array_pop(coins_tomadas)
}

function mostrar_coords() {
    basic.showNumber(x, scr_intervals)
    basic.pause(scr_timeouts)
    basic.clearScreen()
    basic.showNumber(y, scr_intervals)
    basic.pause(scr_timeouts)
    basic.clearScreen()
}

function mostrar_rotacion() {
    let letras = ["N", "E", "S", "W"]
    basic.showString(letras[rotacion], scr_intervals)
    basic.pause(scr_timeouts)
    basic.clearScreen()
}

function mostrar_error() {
    basic.showIcon(IconNames.No)
    basic.pause(scr_timeouts)
    basic.clearScreen()
}

function mostrar_completado() {
    basic.showIcon(IconNames.Yes)
    basic.pause(scr_timeouts)
    basic.showIcon(IconNames.Happy)
    basic.pause(scr_timeouts)
    basic.clearScreen()
}

function mostrar_manual() {
    basic.showString(manual ? "M" : "A")
    basic.pause(scr_timeouts)
    basic.clearScreen()
}

function mostrar_coin() {
    basic.showIcon(IconNames.Diamond)
    basic.pause(scr_timeouts)
    basic.clearScreen()
}

function izquierda(j: number = 1) {
    for (let i = 0; i < j; i++) {
        girar(-1)
        mostrar_rotacion()
        basic.pause(girar_timeout)
    }
}

input.onGesture(Gesture.TiltLeft, function on_gesture_tilt_left() {
    if (manual) {
        izquierda(1)
    }
    
})
function derecha(j: number = 1) {
    for (let i = 0; i < j; i++) {
        girar(1)
        mostrar_rotacion()
        basic.pause(girar_timeout)
    }
}

input.onGesture(Gesture.TiltRight, function on_gesture_tilt_right() {
    if (manual) {
        derecha(1)
    }
    
})
function adelante(j: number = 1) {
    for (let i = 0; i < j; i++) {
        if (avanzar()) {
            mostrar_coords()
        } else {
            mostrar_error()
        }
        
        basic.pause(adel_timeout)
    }
}

input.onGesture(Gesture.LogoDown, function on_gesture_logo_down() {
    if (manual) {
        adelante(1)
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (completado) {
        reset_all()
    } else if (!llego_meta()) {
        mostrar_error()
    }
    
    basic.pause(50)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    manual = !manual
    mostrar_manual()
})
forever(function on_forever() {
    if (completado) {
        mostrar_completado()
    }
    
})
conexion_genibot()
// ## FIN
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    if (manual) {
        return null
    }
    
    //  BIFURCACION 1
    adelante(3)
    izquierda()
    adelante()
    derecha()
    adelante()
    // ## 1
    derecha()
    adelante()
    izquierda()
    adelante(2)
    izquierda()
    adelante(3)
    derecha()
    adelante()
    // ## 2
    //  DEVUELTA BIFURCACION 1
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
    //  VIA PRINCIPAL
    adelante(7)
    derecha()
    adelante()
    izquierda()
    adelante()
    derecha()
    adelante(4)
    derecha()
    adelante()
    //  BIFURCACION 2
    derecha()
    adelante()
    izquierda()
    adelante()
    // ## 3
    //  DEVUELTA BIFURCACION 2
    derecha(2)
    adelante()
    derecha()
    adelante()
    //  VIA PRINCIPAL
    adelante(3)
    //  BIFURCACION 3
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
    // ## 4
    //  DEVUELTA BIFURCACION 3
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
    //  VIA PRINCIPAL
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
    //  BIFURCACION 4
    izquierda()
    adelante(2)
    izquierda()
    adelante()
    // ## 5
    //  DEVUELTA BIFURCACION 4
    derecha(2)
    adelante()
    derecha()
    adelante(2)
})
