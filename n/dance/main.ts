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

enum ArmorStand {
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
    //% block="dance step %s"
    export function dance(d: Dance): void {
        var score = "0"
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

    /**
     * This function instructs which armor 
     * stand should do which dance.
     * 
     * Usage Example: hoc.dance(ArmorStand.One, Dance.Move8)
     * 
     * Valid parameters are:
     * Dance.Move1, Dance.Move2, Dance.Move3, Dance.Move4 all the way through Dance.Move14
     */
    //% block="armor stand %n dance %d"
    export function armorstand_dance(a: ArmorStand, d: Dance): void {
        var score = "0"
        switch (a) {
            case ArmorStand.One:
                score = "1";
                break;
            case ArmorStand.Two:
                score = "2";
                break;
            case ArmorStand.Three:
                score = "3";
                break;
            case ArmorStand.Four:
                score = "4";
                break;
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
    export function _dance_activity(s: ArmorStand, d: _Dances_Actvity): void {
        var score = "0"

        switch (s) {
            case ArmorStand.One:
                score = "1";
                break;
            case ArmorStand.Two:
                score = "2";
                break;
            case ArmorStand.Three:
                score = "3";
                break;
            case ArmorStand.Four:
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