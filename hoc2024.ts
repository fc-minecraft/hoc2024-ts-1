//enums
enum HeadWear{
    //% block="glasses 1"
    Head1,
    //% block="glasses 2"
    Head2,
    //% block="sun glasses 1"
    Head3,
    //% block="sun glasses 2"
    Head4,
    //% block="cowboy hat"
    Head5,
    //% block="astronaut helmet"
    Head6,
    //% block="beard 1"
    Head7,
    //% block="beard 2"
    Head8,
    //% block="mask 1"
    Head9,
    //% block="mask 2"
    Head10

}

enum MidWear {
    //% block="white tee"
    Mid1,
    //% block="black tee"
    Mid2,
    //% block="sports jersey"
    Mid3,
    //% block="cowboy shirt"
    Mid4,
    //% block="astronaut top"
    Mid5,
    //% block="leather jacket"
    Mid6,
    //% block="trench coat"
    Mid7,
    //% block="bubble jacket"
    Mid8,
    //% block="tank top"
    Mid9,
    //% block="hawaiian shirt"
    Mid10,


}

enum LowerWear {
    //% block="dark jeans"
    Lower1,
    //% block="light jeans"
    Lower2,
    //% block="baggy pants"
    Lower3,
    //% block="black shorts"
    Lower4,
    //% block="cargo pants"
    Lower5,
    //% block="hip-hop pants"
    Lower6,
    //% block="cowboy jeans"
    Lower7,
    //% block="astronaut pants"
    Lower8,
    //% block="leather pants"
    Lower9,
    //% block="khakis"
    Lower10


}

enum Dances {
    //% block="woah"
    Move1,
    //% block="swagg bouncee"
    Move2,
    //% block="kangsta wok"
    Move3,
    //% block="smeeze"
    Move4,
    //% block="bust down"
    Move5,
    //% block="cosby walk"
    Move6,
    //% block="mash potato"
    Move7,
    //% block="twist"
    Move8,
    //% block="locking"
    Move9,
    //% block="dougie"
    Move10,
    //% block="kick step"
    Move11,
    //% block="moonwalk"
    Move12

}

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

// MUSIC ACTIVITY
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
    export function drums(d: Drums): void {
        switch (d) {
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
// END MUSIC ACTIVITY

// DANCE ACTIVITY
    //% block="dance step %s"
    export function dances(d: Dances): void {
        switch (d) {
            case Dances.Move1:
                player.say("Dance Move 1")
                break;
            case Dances.Move2:
                player.say("Dance Move 2")
                break;
            case Dances.Move3:
                player.say("Dance Move 3")
                break;
            case Dances.Move4:
                player.say("Dance Move 4")
                break;
            case Dances.Move5:
                player.say("Dance Move 5")
                break;
            case Dances.Move6:
                player.say("Dance Move 6")
                break;
            case Dances.Move7:
                player.say("Dance Move 7")
                break;
            case Dances.Move8:
                player.say("Dance Move 8")
                break;
            case Dances.Move9:
                player.say("Dance Move 9")
                break;
            case Dances.Move10:
                player.say("Dance Move 10")
                break;
            case Dances.Move11:
                player.say("Dance Move 11")
                break;
            case Dances.Move12:
                player.say("Dance Move 12")
                break;

        }
    }
// END DANCE ACTIVITY

// COSTUME ACTIVITY

    //% block="upper %u middle %m lower %l"
    export function costume(u: HeadWear, m: MidWear, l: LowerWear): void {
        let costume_encoded
        switch (u) {
            case HeadWear.Head1:
                costume_encoded = "1"
                break;
            case HeadWear.Head2:
                costume_encoded = "2"
                break;
            case HeadWear.Head3:
                costume_encoded = "3"
                break;
            case HeadWear.Head4:
                costume_encoded = "4"
                break;
            case HeadWear.Head5:
                costume_encoded = "5"
                break;
            case HeadWear.Head6:
                costume_encoded = "6"
                break;
            case HeadWear.Head7:
                costume_encoded = "7"
                break;
            case HeadWear.Head8:
                costume_encoded = "8"
                break;
            case HeadWear.Head9:
                costume_encoded = "9"
                break;
            case HeadWear.Head10:
                costume_encoded = "10"
                break;
        }
        switch (m) {
            case MidWear.Mid1:
                costume_encoded = costume_encoded.concat("1")
                break;
            case MidWear.Mid2:
                costume_encoded = costume_encoded.concat("2")
                break;
            case MidWear.Mid3:
                costume_encoded = costume_encoded.concat("3")
                break;
            case MidWear.Mid4:
                costume_encoded = costume_encoded.concat("4")
                break;
            case MidWear.Mid5:
                costume_encoded = costume_encoded.concat("5")
                break;
            case MidWear.Mid6:
                costume_encoded = costume_encoded.concat("6")
                break;
            case MidWear.Mid7:
                costume_encoded = costume_encoded.concat("7")
                break;
            case MidWear.Mid8:
                costume_encoded = costume_encoded.concat("8")
                break;
            case MidWear.Mid9:
                costume_encoded = costume_encoded.concat("9")
                break;
            case MidWear.Mid10:
                costume_encoded = costume_encoded.concat("10")
                break;

        }
        switch (l) {
            case LowerWear.Lower1:
                costume_encoded = costume_encoded.concat("1")
                break;
            case LowerWear.Lower2:
                costume_encoded = costume_encoded.concat("2")
                break;
            case LowerWear.Lower3:
                costume_encoded = costume_encoded.concat("3")
                break;
            case LowerWear.Lower4:
                costume_encoded = costume_encoded.concat("4")
                break;
            case LowerWear.Lower5:
                costume_encoded = costume_encoded.concat("5")
                break;
            case LowerWear.Lower6:
                costume_encoded = costume_encoded.concat("6")
                break;
            case LowerWear.Lower7:
                costume_encoded = costume_encoded.concat("7")
                break;
            case LowerWear.Lower8:
                costume_encoded = costume_encoded.concat("8")
                break;
            case LowerWear.Lower9:
                costume_encoded = costume_encoded.concat("9")
                break;
            case LowerWear.Lower10:
                costume_encoded = costume_encoded.concat("10")
                break;

        }
    }
}