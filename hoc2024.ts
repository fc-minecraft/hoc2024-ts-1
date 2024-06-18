//enums
enum Drums {
    Half = 0,
    Mid = 1,
    Double = 2
}

enum Keys {
    A,
    B,
    C,
    D,
    E,
    F,
    G
}
enum Instruments {
    //% blockIdentity="blocks.custom" enumval=0 block="Pling"
    //% jres alias=Pling
    Pling = 0,
    //% blockIdentity="blocks.custom" enumval=1 block="Xylophone"
    //% jres alias=Xylophone
    Xylophone = 1,
    //% blockIdentity="blocks.custom" enumval=2 block="Guitar"
    //% jres alias=Guitar
    Guitar = 2,
    //% blockIdentity="blocks.custom" enumval=3 block="Flute"
    //% jres alias=Flute
    Flute = 3,
    //% blockIdentity="blocks.custom" enumval=4 block="Bit"
    //% jres alias=Bit
    Bit = 4,
    //% blockIdentity="blocks.custom" enumval=5 block="Bells"
    //% jres alias=Bells
    Bells = 5,
    //% blockIdentity="blocks.custom" enumval=6 block="Bass"
    //% jres alias=Bass
    Bass = 6
}

//%  block="HOC2024" weight=200 color=#0B3D91 icon="\uf186"
namespace hoc2024 {

    //% block="Key: %k i1 %i1"
    export function testInstrument(i1: Instruments, i2: Instruments, i3: Instruments, k: Keys, d: Drums ): void {
        switch (i1) {
            case Instruments.Pling:
                player.say("Pling")
                break;
            case Instruments.Xylophone:
                player.say("Xylophone")
                break;
            case Instruments.Guitar:
                player.say("Guitar")
                break;
            case Instruments.Flute:
                player.say("Flute")
                break;
            case Instruments.Bit:
                player.say("Bit")
                break;
            case Instruments.Bells:
                player.say("Bells")
                break;
            case Instruments.Bass:
                player.say("Bass")
                break;
        }
    }
}