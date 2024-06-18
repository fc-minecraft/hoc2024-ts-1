//enums
enum Drums {
    Half = 0,
    Mid = 1,
    Double = 2
}

enum Keys {
    A,
    B,
    C,
    D,
    E,
    F,
    G
}
enum Instruments {
    Pling,
    Xylophone,
    Guitar,
    Flute,
    Bit,
    Bells,
    Bass
}

//%  block="HOC2024" weight=200 color=#0B3D91 icon="\uf186"
namespace hoc2024 {

    //% block="k %k i1 %i1"
    export function testInstrument(i1: Instruments, i2: Instruments, i3: Instruments, k: Keys, d: Drums ): void {
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