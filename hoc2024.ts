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

    //% block="key %k %i1 %i2 %i3 drum %d"
    //% i1.fieldEditor="gridpicker"
    //% i1.fieldOptions.columns=4
    //% i2.fieldEditor="gridpicker"
    //% i2.fieldOptions.columns=4
    //% i3.fieldEditor="gridpicker"
    //% i3.fieldOptions.columns=4
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

    //% block="key %k %i1 %i2"
    //% i1.fieldEditor="gridpicker"
    //% i1.fieldOptions.columns=4
    //% i2.fieldEditor="gridpicker"
    //% i2.fieldOptions.columns=4
    export function testInstrument2(k: Keys, i1: Instruments, i2: Instruments): void {
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

    //% block="key %k"
    export function note(k: Keys): void {
        switch (k) {
            case Keys.a:
                player.say("a")
                break;
            case Keys.b:
                player.say("b")
                break;
            case Keys.c:
                player.say("c")
                break;
            case Keys.d:
                player.say("d")
                break;
            case Keys.e:
                player.say("e")
                break;
            case Keys.f:
                player.say("f")
                break;
            case Keys.g:
                player.say("g")
                break;

        }
    }

    //% block="instrument %i"
    //% i.fieldEditor="gridpicker"
    //% i.fieldOptions.columns=4
    export function instrument(i: Instruments): void {
        switch (i) {
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