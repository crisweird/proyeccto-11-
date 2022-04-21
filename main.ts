input.onButtonPressed(Button.A, function () {
    OLED.clear()
    OLED.writeStringNewLine("intensidad:" + Environment.ReadLightIntensity(AnalogPin.P1) + "%")
    basic.pause(2000)
    OLED.clear()
    OLED.writeStringNewLine("pulsa a")
})
OLED.init(128, 64)
OLED.writeStringNewLine("pulsa a")
