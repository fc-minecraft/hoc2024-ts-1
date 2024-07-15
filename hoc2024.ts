//enums

enum Biome {
    //% block="desert"
    Biome0,
    //% block="plain"
    Biome1,
    //% block="jungle"
    Biome2,
    //% block="forest"
    Biome3,
    //% block="badlands"
    Biome4,
    //% block="ocean"
    Biome5,
    //% block="taiga"
    Biome6,
    //% block="beach"
    Biome7,
    //% block="swamp"
    Biome8
}

enum Time {
    //% block="sunrise"
    Time0,
    //% block="noon"
    Time1,
    //% block="sunset"
    Time2,
    //% block="midnight"
    Time3

}

enum WeatherA {
    //% block="sunny"
    Weather0,
    //% block="rain"
    Weather1,
    //% block="snow"
    Weather2,
    //% block="thunderstorm"
    Weather3,
    //% block="lightning"
    Weather4


}

enum HeadWear {
    //% block="glasses 1"
    Head0,
    //% block="glasses 2"
    Head1,
    //% block="sun glasses 1"
    Head2,
    //% block="sun glasses 2"
    Head3,
    //% block="cowboy hat"
    Head4,
    //% block="astronaut helmet"
    Head5,
    //% block="beard 1"
    Head6,
    //% block="beard 2"
    Head7,
    //% block="mask 1"
    Head8,
    //% block="mask 2"
    Head9

}

enum MidWear {
    //% block="white tee"
    Mid0,
    //% block="black tee"
    Mid1,
    //% block="sports jersey"
    Mid2,
    //% block="cowboy shirt"
    Mid3,
    //% block="astronaut top"
    Mid4,
    //% block="leather jacket"
    Mid5,
    //% block="trench coat"
    Mid6,
    //% block="bubble jacket"
    Mid7,
    //% block="tank top"
    Mid8,
    //% block="hawaiian shirt"
    Mid9,


}

enum LowerWear {
    //% block="dark jeans"
    Lower0,
    //% block="light jeans"
    Lower1,
    //% block="baggy pants"
    Lower2,
    //% block="black shorts"
    Lower3,
    //% block="cargo pants"
    Lower4,
    //% block="hip-hop pants"
    Lower5,
    //% block="cowboy jeans"
    Lower6,
    //% block="astronaut pants"
    Lower7,
    //% block="leather pants"
    Lower8,
    //% block="khakis"
    Lower9


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
    //% blockIdentity="blocks.custom" enumval=7 block="Piano"
    //% jres alias=Piano
    Piano
}

//%  block="HOC2024" weight=200 color=#0B3D91 icon="\uf186"
namespace hoc2024 {


// TUTORIAL ACTIVITY
    //% block="raise hand"
    export function raise_hand(): void {
        player.say("hand raised")
    }


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
            case Instruments.Piano:
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
            case HeadWear.Head0:
                costume_encoded = "0"
                break;
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
        }
        switch (m) {
            case MidWear.Mid0:
                costume_encoded = costume_encoded.concat("0")
                break;
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

        }
        switch (l) {
            case LowerWear.Lower0:
                costume_encoded = costume_encoded.concat("0")
                break;
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

        }
        let player_say = "costume "
        player_say = player_say.concat(costume_encoded)
        player.say(player_say)
    }
// END COSTUME ACTIVITY

// SET DESIGN ACTIVITY
    //% block="biome %b time %t weather %w"
    export function seta(b: Biome, t: Time, w: WeatherA): void {
        let set_encode
        switch (b) {
            case Biome.Biome0:
                set_encode = "0"
                break;
            case Biome.Biome1:
                set_encode = "1"
                break;
            case Biome.Biome2:
                set_encode = "2"
                break;
            case Biome.Biome3:
                set_encode = "3"
                break;
            case Biome.Biome4:
                set_encode = "4"
                break;
            case Biome.Biome5:
                set_encode = "5"
                break;
            case Biome.Biome6:
                set_encode = "6"
                break;
            case Biome.Biome7:
                set_encode = "7"
                break;
            case Biome.Biome8:
                set_encode = "8"
                break;
        }
        switch (t) {
            case Time.Time0:
                set_encode = set_encode.concat("0")
                break;
            case Time.Time1:
                set_encode = set_encode.concat("1")
                break;
            case Time.Time2:
                set_encode = set_encode.concat("2")
                break;
            case Time.Time3:
                set_encode = set_encode.concat("3")
                break;
        }
        switch (w) {
            case WeatherA.Weather0:
                set_encode = set_encode.concat("0")
                break;
            case WeatherA.Weather1:
                set_encode = set_encode.concat("1")
                break;
            case WeatherA.Weather2:
                set_encode = set_encode.concat("2")
                break;
            case WeatherA.Weather3:
                set_encode = set_encode.concat("3")
                break;
            case WeatherA.Weather4:
                set_encode = set_encode.concat("4")
                break;
        }
        let player_say = "set "
        player_say = player_say.concat(set_encode)
        player.say(player_say)
    }
// END SET DESIGN ACTIVITY
}