//enums
enum Drums {
    //% block="slow"
    Slow,
    //% block="medium"
    Medium,
    //% block="fast"
    Fast
}

enum Keys {
    //% block="do"
    Do,
    //% block="re"
    Re,
    //% block="mi"
    Mi,
    //% block="fa"
    Fa,
    //% block="so"
    So,
    //% block="la"
    La,
    //% block="ti"
    Ti
}
enum Instruments {
    //% blockIdentity="blocks.custom" enumval=0 block="Synth"
    //% jres alias=Synth
    Synth,
    //% blockIdentity="blocks.custom" enumval=1 block="Xylophone"
    //% jres alias=Xylophone
    Xylophone,
    //% blockIdentity="blocks.custom" enumval=2 block="Guitar"
    //% jres alias=Guitar
    Guitar,
    //% blockIdentity="blocks.custom" enumval=3 block="Flute"
    //% jres alias=Flute
    Flute,
    //% blockIdentity="blocks.custom" enumval=5 block="Bells"
    //% jres alias=Bells
    Bells,
    //% blockIdentity="blocks.custom" enumval=6 block="Bass"
    //% jres alias=Bass
    Bass,
    //% blockIdentity="blocks.custom" enumval=6 block="Piano"
    //% jres alias=Piano
    Piano
}

//%  block="HOC2024" weight=200 color=#0B3D91 icon="\uf186"
namespace hoc2024 {

    //% block="instrument %i"
    //% i.fieldEditor="gridpicker"
    //% i.fieldOptions.columns=4
    export function instrument(i: Instruments): void {
        switch (i) {
            case Instruments.Synth:
                player.say("Synth")
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
            case Instruments.Bells:
                player.say("Bells")
                break;
            case Instruments.Bass:
                player.say("Bass")
                break;
            case Instruments.Bass:
                player.say("Piano")
                break;
        }
    }

    //% block="key %k"
    export function key(k: Keys): void {
        switch (k) {
            case Keys.Do:
                player.say("do")
                break;
            case Keys.Re:
                player.say("re")
                break;
            case Keys.Mi:
                player.say("mi")
                break;
            case Keys.Fa:
                player.say("fa")
                break;
            case Keys.So:
                player.say("so")
                break;
            case Keys.La:
                player.say("la")
                break;
            case Keys.Ti:
                player.say("ti")
                break;

        }
    }

    //% block="drums %s"
    export function drums(s: Drums): void {
        switch (s) {
            case Drums.Slow:
                player.say("drums slow")
                break;
            case Drums.Medium:
                player.say("drums medium")
                break;
            case Drums.Fast:
                player.say("drums fast")
                break;
        }
    }
}