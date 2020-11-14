input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    basic.pause(100)
    basic.clearScreen()
})
basic.forever(function () {
	
})
