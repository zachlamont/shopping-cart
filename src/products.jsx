import guitar1 from "./assets/guitar1.webp";
import keyboard1 from "./assets/keyboard1.webp";
import mic1 from "./assets/mic1.webp";
import key1 from "./assets/key1.webp";

const products = [
  {
    name: "Squier Classic Vibe 70's Stratocaster - Olympic White",
    price: 799.0,
    keyFeatures: [
      "Colour: Olympic White",
      "Fretboard: Other",
      "Guitar body: Poplar",
      "Gigbag / Case: Not included",
    ],
    description:
      "A tip of the hat to the large-headstock Strat® models produced in the 1970s, the Classic Vibe ‘70s Stratocaster creates incredible tone courtesy of a trio of Fender-Designed alnico single-coil pickups. Player-friendly features include a slim and comfortable “C”-shaped neck profile with an easy-playing 9.5”-radius fingerboard and narrow-tall frets, as well as a vintage-style tremolo system for expressive string bending effects. This throwback Squier model also features 1970s inspired headstock markings, nickel-plated hardware and a slick vintage-tinted gloss neck finish for an old-school aesthetic vibe.",
    image: guitar1,
    make: "Squire",
  },
  {
    name: "Nord Electro 6D 73-Key Semi-Weighted Waterfall Keyboard",
    price: 3599.0,
    keyFeatures: [
      "3 part multi-timbral",
      "Split and Layer all 3 sections with optional Split Point Crossfades",
      "OLED Display for excellent overview",
      "Organize Mode for quickly rearranging programs, sounds and pages",
    ],
    description:
      "The Nord Electro 6 combines their award-winning emulations of vintage electro mechanical and acoustic instruments in an ultra-portable package. With 3 independent sound sections, a new streamlined user interface and the addition of Seamless Transitions, we're proud to present the most powerful and flexible Electro ever - a refined modern classic.",
    image: keyboard1,
    make: "Nord",
  },
  {
    name: "Rode NT2A Condenser Microphone Pack (NT-2A)",
    price: 489.0,
    keyFeatures: [
      "Designed for Ableton Live – Immediate access to all the controls you need.",
      "Create and play with feeling – Velocity-sensitive keyboard and 16 velocity-sensitive pads enable expressive and dynamic performance.",
      "Get creative with chords – Three chord modes (fixed, scale and user) let you trigger chords with one finger.",
      "Never hit a wrong note – Scale modes transpose keys and pads to notes in the selected scale.",
    ],
    description:
      'A professional large capsule (1") versatile studio microphone incorporating three-position pick-up patterns, PAD and high pass filter switches conveniently located on the body. The frequency and transient response has been voiced to complement todays modern recording techniques, and yet still evoke the silky smooth character of the legendary microphones of the 50s and 60s. Package includes SM6 shock mount with integrated pop filter, 3m (10") XLR cable and dustcover.',
    image: mic1,
    make: "RODE",
  },
  {
    name: "Novation Launchkey 49 MKIII Controller Keyboard",
    price: 369.0,
    keyFeatures: [
      "Designed for Ableton Live – Immediate access to all the controls you need.",
      "Create and play with feeling – Velocity-sensitive keyboard and 16 velocity-sensitive pads enable expressive and dynamic performance.",
      "Get creative with chords – Three chord modes (fixed, scale and user) let you trigger chords with one finger.",
      "Never hit a wrong note – Scale modes transpose keys and pads to notes in the selected scale.",
    ],
    description:
      "Launchkey is our intuitive and fully integrated MIDI keyboard controller for making tracks in Ableton Live and with your external equipment. The Launchkey experience is designed for players of all types and abilities. With Launchkey, regardless of experience, you can create and play your music like never before. With its various musical creation features, all of which can be used standalone, Launchkey removes barriers to creativity, and expands the musical vocabulary of even the most talented keyboardists. Eight Scale modes guide you into new musical territory, by transposing keys played to notes in the scale selected. Simply choose your root note and your preferred scale, then play. Three Chord modes transform the keys and pads into an interactive surface of musical exploration, where every note played is tonally and harmonically linked. The arpeggiator lets you explore new melodies and find ideas quickly, while the mutate function reconstructs your patterns into exciting new forms. Custom Modes simplify the relationship between controller and software, with more power than ever in your hands.",
    image: key1,
    make: "Novation",
  },
];

export default products;
