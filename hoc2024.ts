//enums
enum Drums {
    Half = 0,
    Mid = 1,
    Double = 2
}

enum Keys {
    //% block = "a"
    A = 0,
    //% block = "b"
    B = 1,
    //% block = "c"
    C = 2,
    //% block = "d"
    D = 3,
    //% block = "e"
    E = 4,
    //% block = "f"
    F = 5,
    //% block = "g"
    G = 6
}
enum Instruments {
    //% blockIdentity="blocks.custom" enumval=0 block="Pling"
    //% jres alias=Pling
    Pling,
    //% blockIdentity="blocks.custom" enumval=1 block="Xylophone"
    //% jres alias=Xylophone
    Xylophone,
    //% blockIdentity="blocks.custom" enumval=2 block="Guitar"
    //% jres alias=Guitar
    Guitar,
    //% blockIdentity="blocks.custom" enumval=3 block="Flute"
    //% jres alias=Flute
    Flute,
    //% blockIdentity="blocks.custom" enumval=4 block="Bit"
    //% jres alias=Bit
    Bit,
    //% blockIdentity="blocks.custom" enumval=5 block="Bells"
    //% jres alias=Bells
    Bells,
    //% blockIdentity="blocks.custom" enumval=6 block="Bass"
    //% jres alias=Bass
    Bass
}

//%  block="HOC2024" weight=200 color=#0B3D91 icon="\uf186"
namespace hoc2024 {

    //% block="k %k i1 %i1 d %d"
    export function testInstrument(k: Keys, i1: Instruments, i2: Instruments, i3: Instruments, d: Drums ): void {
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