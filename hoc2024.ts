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

enum BiomeA {
    //% block="taiga"
    Biome2,
    //% block="desert"
    Biome3,
    //% block="jungle"
    Biome4
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

enum TimeA {
    //% block="day"
    Time2,
    //% block="sunset"
    Time3,
    //% block="night"
    Time4

}

enum WeatherS {
    //% block="clear"
    Weather1,
    //% block="snow"
    Weather2,
    //% block="rain"
    Weather3,
    //% block="thunderstorm"
    Weather4
}

enum WeatherA {
    //% block="clear"
    Weather1,
    //% block="snow"
    Weather2,
    //% block="rain"
    Weather3
}

enum HeadWear {
    //% block="NEEDS ITEM"
    Head1,
    //% block="knight helmet"
    Head2,
    //% block="NEEDS ITEM"
    Head3,
    //% block="NEEDS ITEM"
    Head4,
    //% block="cowboy hat"
    Head5,
    //% block="astronaut helmet"
    Head6
}

enum HeadWearA {
    //% block="knight helmet"
    Head2,
    //% block="cowboy hat"
    Head5,
    //% block="astronaut helmet"
    Head6
}


enum MidWear {
    //% block="NEEDS ITEM"
    Mid1,
    //% block="NEEDS ITEM"
    Mid2,
    //% block="NEEDS ITEM"
    Mid3,
    //% block="cowboy shirt"
    Mid4,
    //% block="astronaut top"
    Mid5,
    //% block="knight shirt"
    Mid6
}

enum MidWearA {
    //% block="cowboy shirt"
    Mid4,
    //% block="astronaut top"
    Mid5,
    //% block="knight shirt"
    Mid6
}

enum LowerWear {
    //% block="NEEDS ITEM"
    Lower1,
    //% block="NEEDS ITEM"
    Lower2,
    //% block="knight pants"
    Lower3,
    //% block="cowboy jeans"
    Lower4,
    //% block="astronaut pants"
    Lower5,
    //% block="NEEDS ITEM"
    Lower6
}

enum LowerWearA {
    //% block="knight pants"
    Lower3,
    //% block="cowboy jeans"
    Lower4,
    //% block="astronaut pants"
    Lower5
}

enum Dances {
    //% block="DANCE 1"
    Move1,
    //% block="DANCE 2"
    Move2,
    //% block="DANCE 3"
    Move3,
    //% block="DANCE 4"
    Move4,
    //% block="DANCE 5"
    Move5,
    //% block="DANCE 6"
    Move6
}

enum DancesA {
    //% block="DANCE 1"
    Move1,
    //% block="DANCE 3"
    Move3,
    //% block="DANCE 4"
    Move4,
    //% block="DANCE 6"
    Move6
}

enum Drums {
    //% block="none"
    None,    
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

//GLOBAL VARIABLES
const communicationsTimeout = 100;

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
                player.execute("scoreboard players reset * song.inst")
                player.execute("scoreboard players set synth song.inst 01")
                break;
            case Instruments.Xylophone:
                player.execute("scoreboard players reset * song.inst")
                player.execute("scoreboard players set xylophone song.inst 01")
                break;
            case Instruments.Guitar:
                player.execute("scoreboard players reset * song.inst")
                player.execute("scoreboard players set guitar song.inst 01")
                break;
            case Instruments.Flute:
                player.execute("scoreboard players reset * song.inst")
                player.execute("scoreboard players set flute song.inst 01")
                break;
            case Instruments.Bells:
                player.execute("scoreboard players reset * song.inst")
                player.execute("scoreboard players set bells song.inst 01")
                break;
            case Instruments.Bass:
                player.execute("scoreboard players reset * song.inst")
                player.execute("scoreboard players set bass song.inst 01")
                break;
            case Instruments.Piano:
                player.execute("scoreboard players reset * song.inst")
                player.execute("scoreboard players set piano song.inst 01")
                break;
            case Instruments.Villager:
                player.execute("scoreboard players reset * song.inst")
                player.execute("scoreboard players set villager song.inst 01")
                break;
        }
        loops.pause(communicationsTimeout)
    }

    //% block="remove instrument %i"
    //% i.fieldEditor="gridpicker"
    //% i.fieldOptions.columns=4
    export function remove_instrument(i: Instruments): void {
        switch (i) {
            case Instruments.Synth:
                player.say("Removed Synth")
                break;
            case Instruments.Xylophone:
                player.say("Removed Xylophone")
                break;
            case Instruments.Guitar:
                player.say("Removed Guitar")
                break;
            case Instruments.Flute:
                player.say("Removed Flute")
                break;
            case Instruments.Bells:
                player.say("Removed Bells")
                break;
            case Instruments.Bass:
                player.say("Removed Bass")
                break;
            case Instruments.Piano:
                player.say("Removed Piano")
                break;
            case Instruments.Villager:
                player.say("Removed Villager")
                break;
        }
        loops.pause(communicationsTimeout)
    }

    //% block="note %k"
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
        loops.pause(communicationsTimeout)
    }

    //% block="drums %s"
    export function drums(d: Drums): void {
        switch (d) {
            case Drums.None:
                player.execute("scoreboard players reset * song.drums")
                break;
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
        loops.pause(communicationsTimeout)
    }
// END MUSIC ACTIVITY

// DANCE ACTIVITY

    //SANDBOX
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
        }
        loops.pause(communicationsTimeout)
    }

    //ACTIVITY
    //% block="dance step %s"
    export function dancea(d: DancesA): void {
        switch (d) {
            case DancesA.Move1:
                player.execute("scoreboard players set move dance.var 01")
                break;
            case DancesA.Move3:
                player.execute("scoreboard players set move dance.var 03")
                break;
            case DancesA.Move4:
                player.execute("scoreboard players set move dance.var 04")
                break;
            case DancesA.Move6:
                player.execute("scoreboard players set move dance.var 06")
                break;
        }
        loops.pause(communicationsTimeout)
    }
// END DANCE ACTIVITY

// COSTUME ACTIVITY

    //SANDBOX
    //% block="head %u body %m legs %l"
    export function costume(u: HeadWear, m: MidWear, l: LowerWear): void {
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
        loops.pause(communicationsTimeout)

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
        loops.pause(communicationsTimeout)

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
        loops.pause(communicationsTimeout)
    }

    //ACTIVITY
    //% block="head %u body %m legs %l"
    export function costumea(u: HeadWearA, m: MidWearA, l: LowerWearA): void {
        switch (u) {
            case HeadWearA.Head2:
                player.execute("scoreboard players set upper costume.var 02")
                break;
            case HeadWearA.Head5:
                player.execute("scoreboard players set upper costume.var 05")
                break;
            case HeadWearA.Head6:
                player.execute("scoreboard players set upper costume.var 06")
                break;
        }
        loops.pause(communicationsTimeout)

        switch (m) {
            case MidWearA.Mid4:
                player.execute("scoreboard players set middle costume.var 04")
                break;
            case MidWearA.Mid5:
                player.execute("scoreboard players set middle costume.var 05")
                break;
            case MidWearA.Mid6:
                player.execute("scoreboard players set middle costume.var 06")
                break;
        }
        loops.pause(communicationsTimeout)

        switch (l) {
            case LowerWearA.Lower3:
                player.execute("scoreboard players set lower costume.var 03")
                break;
            case LowerWearA.Lower4:
                player.execute("scoreboard players set lower costume.var 04")
                break;
            case LowerWearA.Lower5:
                player.execute("scoreboard players set lower costume.var 05")
                break;
        }
        loops.pause(communicationsTimeout)
    }
// END COSTUME ACTIVITY

// SET DESIGN ACTIVITY

    //SANDBOX
    //% block="biome %b time %t weather %w"
    export function sets(b: Biome, t: Time, w: WeatherS): void {
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
        loops.pause(communicationsTimeout)

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
        loops.pause(communicationsTimeout)

        switch (w) {
            case WeatherS.Weather1:
                player.execute("scoreboard players set weather set.var 01")
                break;
            case WeatherS.Weather2:
                player.execute("scoreboard players set weather set.var 02")
                break;
            case WeatherS.Weather3:
                player.execute("scoreboard players set weather set.var 03")
                break;
            case WeatherS.Weather4:
                player.execute("scoreboard players set weather set.var 04")
                break;
        }
        loops.pause(communicationsTimeout)
    }

    //ACTIVITY
    //% block="biome %b time %t weather %w"
    export function seta(b: BiomeA, t: TimeA, w: WeatherA): void {
        switch (b) {
            case BiomeA.Biome2:
                player.execute("scoreboard players set biome set.var 02")
                break;
            case BiomeA.Biome3:
                player.execute("scoreboard players set biome set.var 03")
                break;
            case BiomeA.Biome4:
                player.execute("scoreboard players set biome set.var 04")
                break;
        }
        loops.pause(communicationsTimeout)

        switch (t) {
            case TimeA.Time2:
                player.execute("scoreboard players set time set.var 02")
                break;
            case TimeA.Time3:
                player.execute("scoreboard players set time set.var 03")
                break;
            case TimeA.Time4:
                player.execute("scoreboard players set time set.var 04")
                break;
        }
        loops.pause(communicationsTimeout)

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
        }
        loops.pause(communicationsTimeout)
    }
// END SET DESIGN ACTIVITY
}