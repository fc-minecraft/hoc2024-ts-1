//ENUMS

enum Dance {
    //% block="golem gallop"
    Move1,
    //% block="dolphin disco"
    Move2,
    //% block="wither wave"
    Move3,
    //% block="mushroom march"
    Move4,
    //% block="blaze bounce"
    Move5,
    //% block="creeper clap"
    Move6,
    //% block="ravager romp"
    Move7,
    //% block="hoglin hand jive"
    Move8,
    //% block="dungeon dig"
    Move9,
    //% block="alex axle"
    Move10,
    //% block="warden whirl"
    Move11
}

enum _Dances_Actvity {
    //% block="golem gallop"
    Move1,
    //% block="dolphin disco"
    Move2,
    //% block="wither wave"
    Move3,
    //% block="mushroom march"
    Move4
}

enum _Dances_Actvity_ArmorStand {
    //% block="1"
    One,
    //% block="2"
    Two,
    //% block="3"
    Three,
    //% block="4"
    Four
}

//GLOBAL VARIABLES
const communicationsTimeout = 100;

//%  block="HOC2024" weight=200 color=#0B3D91 icon="\uf186"
namespace hoc {

    // DANCE ACTIVITY

    //SANDBOX
    /**
     * This function instructs which dance should be done.
     * 
     * Usage Example: hoc.dance(Dance.Move8)
     * 
     * Valid parameters are:
     * Dance.Move1, Dance.Move2, Dance.Move3, Dance.Move4 all the way through Dance.Move14
     */
    //% block="character %n dance %d"
    export function dance(d: Dance, n?: number): void {
        var score = "0"
        if (typeof n == 'undefined') {
            score = "0"
        } else if (Number(n) > 0 && Number(n) < 5) {
            score = String(n)
        } else {
            score = "0"
        }
        switch (d) {
            case Dance.Move1:
                score += "01"
                break;
            case Dance.Move2:
                score += "02"
                break;
            case Dance.Move3:
                score += "03"
                break;
            case Dance.Move4:
                score += "04"
                break;
            case Dance.Move5:
                score += "05"
                break;
            case Dance.Move6:
                score += "06"
                break;
            case Dance.Move7:
                score += "07"
                break;
            case Dance.Move8:
                score += "08"
                break;
            case Dance.Move9:
                score += "09"
                break;
            case Dance.Move10:
                score += "10"
                break;
            case Dance.Move11:
                score += "11"
                break;
        }
        player.execute("scoreboard players set move dance.var " + score)
        loops.pause(communicationsTimeout)
    }

    //ACTIVITY
    //% block="armor stand %s dance %d"
    export function _dance_activity(s: _Dances_Actvity_ArmorStand, d: _Dances_Actvity): void {
        var score = "0"

        switch (s) {
            case _Dances_Actvity_ArmorStand.One:
                score = "1";
                break;
            case _Dances_Actvity_ArmorStand.Two:
                score = "2";
                break;
            case _Dances_Actvity_ArmorStand.Three:
                score = "3";
                break;
            case _Dances_Actvity_ArmorStand.Four:
                score = "4";
                break;
        }

        switch (d) {
            case _Dances_Actvity.Move1:
                score += "01"
                break;
            case _Dances_Actvity.Move2:
                score += "02"
                break;
            case _Dances_Actvity.Move3:
                score += "03"
                break;
            case _Dances_Actvity.Move4:
                score += "04"
                break;
        }

        player.execute("scoreboard players set move dance.var " + score)
        loops.pause(communicationsTimeout)
    }

    // END DANCE ACTIVITY
}