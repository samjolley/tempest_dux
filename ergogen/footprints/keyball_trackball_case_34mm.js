// Ergogen footprint: keyball_trackball_case_34mm
//
// Mechanical mount footprint for the keyball type-D 34mm trackball case.
// Reference point (0,0) = PMW3610 optical center (ball contact axis).
// No copper nets — this is a purely mechanical footprint.
//
// ── Coordinate orientation (0 deg, before ergogen rotation) ─────────────────
//   +Y  = toward ball cup  / away from connector
//   -Y  = toward connector / pin side of badjeff module
//   +X  = slot "front" wall (right wall at +9.2mm)
//   -X  = slot "back"  wall (left  wall at -9.2mm)
//
// ── Slot dimensions (from STEP analysis of keyball type-D, custom v2) ───────
//   Width  (X): 18.4mm  → courtyard x: -9.2 .. +9.2
//   Length (Y): 30.0mm  → courtyard y: -15.0 .. +15.0
//   Depth  (Z): 18.0mm  (into case, not represented on PCB)
//
// ── Screw holes (M1.4 × 5mm) ────────────────────────────────────────────────
//   Separated across the slot WIDTH (X axis), ~16mm apart; both offset +1.51 in Y.
//   SH1: (-7.98, +1.51)   NPTH 1.6mm drill   (-X / "back"  wall side)
//   SH2: (+7.98, +1.51)   NPTH 1.6mm drill   (+X / "front" wall side)
//   Confirmed correct against the physical Keyball type-D case.
//
//
// ── Ergogen usage ────────────────────────────────────────────────────────────
//   Place at the same anchor, shift, and rotate as the pmw3610_badjeff_socket
//   footprint so optical centers coincide. Both use rotate: pmw_rotate.

module.exports = {
  params: {
    designator: 'TB',
    // No electrical nets — mechanical only
  },

  body: p => {
    // ── Dimensions ──────────────────────────────────────────────────────────
    const slotW  = 18.4;   // slot width  (footprint X axis)
    const slotL  = 30.0;   // slot length (footprint Y axis)
    const halfW  = slotW / 2;   //  9.2 mm
    const halfL  = slotL / 2;   // 15.0 mm
    const crtClr = 0.25;        // courtyard clearance

    // Screw holes (M1.4 pass-through NPTH)
    const screwDrill = 1.60;   // M1.4 clearance
    const screwRing  = 1.50;   // courtyard ring radius around hole

    // Optical center crosshair
    const xhairR = 1.0;

    // Ball clearance circle on B.SilkS (sensor aperture reference, r=13mm)
    const ballR = 13.0;

    // Screw holes: M1.4 NPTH, ~16mm apart across the slot WIDTH (local X),
    // both offset +1.51 in Y. Confirmed correct against the Keyball type-D case.
    const sh = [
      { x: -7.98, y: 1.51, lbl: 'SH1' },
      { x:  7.98, y: 1.51, lbl: 'SH2' },
    ];

    // ── Footprint body ──────────────────────────────────────────────────────
    // ALL positions below are LOCAL to the footprint (KiCad rotates them
    // around the footprint origin when placing on the board).
    return `
(footprint "keyball_trackball_case_34mm"
  (layer "F.Cu")
  (at ${p.x} ${p.y} ${p.r})
  (attr exclude_from_pos_files exclude_from_bom allow_missing_courtyard)

  (property "Reference" "${p.designator}"
    (at 0 ${-(halfL + 2.5)} ${p.r})
    (layer "F.SilkS")
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (property "Value" "keyball_34mm_case"
    (at 0 ${halfL + 2.0} ${p.r})
    (layer "F.Fab")
    (effects (font (size 0.8 0.8) (thickness 0.12)))
  )

  (fp_circle
    (center 0 0)
    (end ${ballR} 0)
    (stroke (width 0.10) (type solid))
    (fill none)
    (layer "B.SilkS")
  )

  (fp_rect
    (start ${-halfW} ${-halfL})
    (end   ${ halfW} ${ halfL})
    (stroke (width 0.12) (type solid))
    (fill none)
    (layer "F.Fab")
  )

  (fp_line
    (start ${-5.20} ${-halfL})
    (end   ${ 5.20} ${-halfL})
    (stroke (width 0.25) (type solid))
    (layer "B.Fab")
  )
  (fp_text user "CONN"
    (at 0 ${-halfL + 1.5} ${p.r})
    (layer "B.Fab")
    (effects (font (size 0.7 0.7) (thickness 0.10)))
  )

  (fp_rect
    (start ${-halfW - crtClr} ${-halfL - crtClr})
    (end   ${ halfW + crtClr} ${ halfL + crtClr})
    (stroke (width 0.05) (type solid))
    (fill none)
    (layer "F.CrtYd")
  )

  (fp_line
    (start ${-xhairR} 0)
    (end   ${ xhairR} 0)
    (stroke (width 0.10) (type solid))
    (layer "B.SilkS")
  )
  (fp_line
    (start 0 ${-xhairR})
    (end   0 ${ xhairR})
    (stroke (width 0.10) (type solid))
    (layer "B.SilkS")
  )
  (fp_circle
    (center 0 0)
    (end 0.5 0)
    (stroke (width 0.10) (type solid))
    (fill none)
    (layer "B.SilkS")
  )
  (fp_text user "OPT"
    (at 2.0 0.8 ${p.r})
    (layer "B.SilkS")
    (effects (font (size 0.6 0.6) (thickness 0.09)))
  )

${sh.map(s => `
  (pad "" np_thru_hole circle
    (at ${s.x} ${s.y} ${p.r})
    (size ${screwDrill} ${screwDrill})
    (drill ${screwDrill})
    (layers "*.Cu" "*.Mask")
  )
  (fp_circle
    (center ${s.x} ${s.y})
    (end    ${s.x + screwRing} ${s.y})
    (stroke (width 0.10) (type solid))
    (fill none)
    (layer "F.Fab")
  )
  (fp_text user "${s.lbl}"
    (at ${s.x + 2.2} ${s.y} ${p.r})
    (layer "Dwgs.User")
    (effects (font (size 0.6 0.6) (thickness 0.09)))
  )`).join('\n')}

)`;
  },
};