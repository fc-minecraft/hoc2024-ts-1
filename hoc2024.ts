//enums
enum Drums {
    Half = 0,
    Mid = 1,
    Double = 2
}

enum Keys {
    a,
    b,
    c,
    d,
    e,
    f,
    g
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
    //% i1.fieldEditor="gridpicker"
    //% i1.fieldOptions.columns=4
    export function testInstrument(k: Keys, i1: Instruments, d: Drums ): void {
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