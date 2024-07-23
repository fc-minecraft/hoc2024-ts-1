//enums

enum Biome {
    //% block="savannah"
    Biome1,
    //% block="taiga"
    Biome2,
    //% block="desert"
    Biome3,
    //% block="jungle"
    Biome4,
    //% block="forest"
    Biome5,
    //% block="ocean"
    Biome6,
    //% block="nether"
    Biome7,
    //% block="end"
    Biome8,
    //% block="city"
    Biome9,
    //% block="space"
    Biome10
}

enum Time {
    //% block="sunrise"
    Time1,
    //% block="day"
    Time2,
    //% block="sunset"
    Time3,
    //% block="night"
    Time4

}

enum WeatherA {
    //% block="clear"
    Weather1,
    //% block="snow"
    Weather2,
    //% block="rain"
    Weather3,
    //% block="thunderstorm"
    Weather4


}

enum HeadWear {
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
    Head6

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
    Mid6



}

enum LowerWear {
    //% block="dark jeans"
    Lower1,
    //% block="light jeans"
    Lower2,
    //% block="baggy pants"
    Lower3,
    //% block="cowboy jeans"
    Lower4,
    //% block="astronaut pants"
    Lower5,
    //% block="hip-hop pants"
    Lower6


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
    //% blockIdentity="blocks.custom" enumval=0 block="synth"
    //% jres alias=Synth
    Synth,
    //% blockIdentity="blocks.custom" enumval=1 block="xylophone"
    //% jres alias=Xylophone
    Xylophone,
    //% blockIdentity="blocks.custom" enumval=2 block="guitar"
    //% jres alias=Guitar
    Guitar,
    //% blockIdentity="blocks.custom" enumval=3 block="flute"
    //% jres alias=Flute
    Flute,
    //% blockIdentity="blocks.custom" enumval=5 block="bells"
    //% jres alias=Bells
    Bells,
    //% blockIdentity="blocks.custom" enumval=6 block="bass"
    //% jres alias=Bass
    Bass,
    //% blockIdentity="blocks.custom" enumval=7 block="piano"
    //% jres alias=Piano
    Piano,
    //% blockIdentity="blocks.custom" enumval=8 block="villager"
    //% jres alias=Villager
    Villager
}

//%  block="HOC2024" weight=200 color=#0B3D91 icon="\uf186"
namespace hoc2024 {


// TUTORIAL ACTIVITY
    //% block="raise hand"
    export function raise_hand(): void {
        player.execute("scoreboard players set .output global 1")
    }


// MUSIC ACTIVITY
    //% block="instrument %i"
    //% i.fieldEditor="gridpicker"
    //% i.fieldOptions.columns=4
    export function instrument(i: Instruments): void {
        switch (i) {
            case Instruments.Synth:
                player.execute("scoreboard players set synth song.inst 00")
                player.execute("scoreboard players set synth song.inst 01")
                break;
            case Instruments.Xylophone:
                player.execute("scoreboard players set xylophone song.inst 00")
                player.execute("scoreboard players set xylophone song.inst 01")
                break;
            case Instruments.Guitar:
                player.execute("scoreboard players set guitar song.inst 00")
                player.execute("scoreboard players set guitar song.inst 01")
                break;
            case Instruments.Flute:
                player.execute("scoreboard players set flute song.inst 00")
                player.execute("scoreboard players set flute song.inst 01")
                break;
            case Instruments.Bells:
                player.execute("scoreboard players set bells song.inst 00")
                player.execute("scoreboard players set bells song.inst 01")
                break;
            case Instruments.Bass:
                player.execute("scoreboard players set bass song.inst 00")
                player.execute("scoreboard players set bass song.inst 01")
                break;
            case Instruments.Piano:
                player.execute("scoreboard players set piano song.inst 00")
                player.execute("scoreboard players set piano song.inst 01")
                break;
            case Instruments.Villager:
                player.execute("scoreboard players set villager song.inst 00")
                player.execute("scoreboard players set villager song.inst 01")
                break;
        }
    }

    //% block="key %k"
    export function key(k: Keys): void {
        switch (k) {
            case Keys.Do:
                player.execute("scoreboard players reset * song.key")
                player.execute("scoreboard players set do song.key 01")
                break;
            case Keys.Re:
                player.execute("scoreboard players reset * song.key")
                player.execute("scoreboard players set re song.key 01")
                break;
            case Keys.Mi:
                player.execute("scoreboard players reset * song.key")
                player.execute("scoreboard players set mi song.key 01")
                break;
            case Keys.Fa:
                player.execute("scoreboard players reset * song.key")
                player.execute("scoreboard players set fa song.key 01")
                break;
            case Keys.So:
                player.execute("scoreboard players reset * song.key")
                player.execute("scoreboard players set so song.key 01")
                break;
            case Keys.La:
                player.execute("scoreboard players reset * song.key")
                player.execute("scoreboard players set la song.key 01")
                break;
            case Keys.Ti:
                player.execute("scoreboard players reset * song.key")
                player.execute("scoreboard players set ti song.key 01")
                break;

        }
    }

    //% block="drums %s"
    export function drums(d: Drums): void {
        switch (d) {
            case Drums.Slow:
                player.execute("scoreboard players reset * song.drums")
                player.execute("scoreboard players set slow song.drums 01")
                break;
            case Drums.Medium:
                player.execute("scoreboard players reset * song.drums")
                player.execute("scoreboard players set medium song.drums 01")
                break;
            case Drums.Fast:
                player.execute("scoreboard players reset * song.drums")
                player.execute("scoreboard players set fast song.drums 01")
                break;
        }
    }
// END MUSIC ACTIVITY

// DANCE ACTIVITY
    //% block="dance step %s"
    export function dances(d: Dances): void {
        switch (d) {
            case Dances.Move1:
                player.execute("scoreboard players set move dance.var 01")
                break;
            case Dances.Move2:
                player.execute("scoreboard players set move dance.var 02")
                break;
            case Dances.Move3:
                player.execute("scoreboard players set move dance.var 03")
                break;
            case Dances.Move4:
                player.execute("scoreboard players set move dance.var 04")
                break;
            case Dances.Move5:
                player.execute("scoreboard players set move dance.var 05")
                break;
            case Dances.Move6:
                player.execute("scoreboard players set move dance.var 06")
                break;
            case Dances.Move7:
                player.execute("scoreboard players set move dance.var 07")
                break;
            case Dances.Move8:
                player.execute("scoreboard players set move dance.var 08")
                break;
            case Dances.Move9:
                player.execute("scoreboard players set move dance.var 09")
                break;
            case Dances.Move10:
                player.execute("scoreboard players set move dance.var 10")
                break;
            case Dances.Move11:
                player.execute("scoreboard players set move dance.var 11")
                break;
            case Dances.Move12:
                player.execute("scoreboard players set move dance.var 12")
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
                player.execute("scoreboard players set upper costume.var 01")
                break;
            case HeadWear.Head2:
                player.execute("scoreboard players set upper costume.var 02")
                break;
            case HeadWear.Head3:
                player.execute("scoreboard players set upper costume.var 03")
                break;
            case HeadWear.Head4:
                player.execute("scoreboard players set upper costume.var 04")
                break;
            case HeadWear.Head5:
                player.execute("scoreboard players set upper costume.var 05")
                break;
            case HeadWear.Head6:
                player.execute("scoreboard players set upper costume.var 06")
                break;
        }
        switch (m) {
            case MidWear.Mid1:
                player.execute("scoreboard players set middle costume.var 01")
                break;
            case MidWear.Mid2:
                player.execute("scoreboard players set middle costume.var 02")
                break;
            case MidWear.Mid3:
                player.execute("scoreboard players set middle costume.var 03")
                break;
            case MidWear.Mid4:
                player.execute("scoreboard players set middle costume.var 04")
                break;
            case MidWear.Mid5:
                player.execute("scoreboard players set middle costume.var 05")
                break;
            case MidWear.Mid6:
                player.execute("scoreboard players set middle costume.var 06")
                break;

        }
        switch (l) {
            case LowerWear.Lower1:
                player.execute("scoreboard players set lower costume.var 01")
                break;
            case LowerWear.Lower2:
                player.execute("scoreboard players set lower costume.var 02")
                break;
            case LowerWear.Lower3:
                player.execute("scoreboard players set lower costume.var 03")
                break;
            case LowerWear.Lower4:
                player.execute("scoreboard players set lower costume.var 04")
                break;
            case LowerWear.Lower5:
                player.execute("scoreboard players set lower costume.var 05")
                break;
            case LowerWear.Lower6:
                player.execute("scoreboard players set lower costume.var 06")
                break;

        }
    }
// END COSTUME ACTIVITY

// SET DESIGN ACTIVITY
    //% block="biome %b time %t weather %w"
    export function seta(b: Biome, t: Time, w: WeatherA): void {
        let set_encode
        switch (b) {
            case Biome.Biome1:
                player.execute("scoreboard players set biome set.var 01")
                break;
            case Biome.Biome2:
                player.execute("scoreboard players set biome set.var 02")
                break;
            case Biome.Biome3:
                player.execute("scoreboard players set biome set.var 03")
                break;
            case Biome.Biome4:
                player.execute("scoreboard players set biome set.var 04")
                break;
            case Biome.Biome5:
                player.execute("scoreboard players set biome set.var 05")
                break;
            case Biome.Biome6:
                player.execute("scoreboard players set biome set.var 06")
                break;
            case Biome.Biome7:
                player.execute("scoreboard players set biome set.var 07")
                break;
            case Biome.Biome8:
                player.execute("scoreboard players set biome set.var 08")
                break;
            case Biome.Biome9:
                player.execute("scoreboard players set biome set.var 09")
                break;
            case Biome.Biome10:
                player.execute("scoreboard players set biome set.var 10")
                break;
        }
        switch (t) {
            case Time.Time1:
                player.execute("scoreboard players set time set.var 01")
                break;
            case Time.Time2:
                player.execute("scoreboard players set time set.var 02")
                break;
            case Time.Time3:
                player.execute("scoreboard players set time set.var 03")
                break;
            case Time.Time4:
                player.execute("scoreboard players set time set.var 04")
                break;
        }
        switch (w) {
            case WeatherA.Weather1:
                player.execute("scoreboard players set weather set.var 01")
                break;
            case WeatherA.Weather2:
                player.execute("scoreboard players set weather set.var 02")
                break;
            case WeatherA.Weather3:
                player.execute("scoreboard players set weather set.var 03")
                break;
            case WeatherA.Weather4:
                player.execute("scoreboard players set weather set.var 04")
                break;
        }
    }
// END SET DESIGN ACTIVITY
}