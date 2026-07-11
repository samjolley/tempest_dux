# Tempest Dux

A wireless split ergonomic keyboard with an integrated trackball. Thirty-six keys, low-profile Choc switches, nice!nano v2, nice!view display, and a PMW3610 trackball on the right half.

This is my build. I did not design it from scratch, and the credits below matter.

## Lineage and credits

- **Ergonomics:** the dux family, Rae-Dux and Architeuthis Dux.
- **Base design and visual theme:** [thrly's Tempest](https://github.com/thrly/tempest).
- **Firmware base:** [Manna Harbour's Miryoku](https://github.com/manna-harbour/miryoku) for ZMK.
- **Trackball driver:** [badjeff's PMW3610 module](https://github.com/badjeff/zmk-pmw3610-driver).

## What is mine

Built on that lineage, my own contribution is:

- a custom PCB laid out with Ergogen and finished in KiCad (matrix, MCU, display, power, and the trackball cluster),
- the integrated PMW3610 trackball on the right half, its socket, and the printed housing,
- custom outlines and multi-layer 3D-printed plates and case,
- the ZMK firmware integration that makes the trackball a first-class input alongside the keys.

## Status

- **v0.6.56** boards fabricated and in assembly and bring-up.
- **v0.7.x** in progress: the reversible board architecture is dropped in favor of separate left and right files, with mounting-hole clearance, test points, and a dual-face ground pour on the errata list.

## Build log

I wrote up the design decisions, the failures, and what I would do differently here: <https://samjolley.com/writing/building-the-tempest-dux/>

## License

My original work here (the Ergogen config, the KiCad board, and my custom footprints) is released under the MIT License; see [LICENSE](LICENSE). Bundled third-party components keep their own licenses: the `ceoloide` Ergogen footprints under `ergogen/footprints/ceoloide/` retain the license headers in each file. This design builds on the prior art credited above, which carries its own terms where stated.
