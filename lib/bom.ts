// Parts actually on the table. Public list only — no stores, order numbers, or prices per vendor.
// The one total is bomTotalLabel. Swap a line in the journal when a part changes.

export type BomItem = {
  part: string;
  role: string;
  notes: string;
  status: "needed" | "have" | "maybe";
};

export type BomGroup = {
  group: string;
  items: BomItem[];
};

/** One line under the parts list on /build. Not a receipt. */
export const bomTotalLabel = "Total so far: about $230.";

export const BOM: BomGroup[] = [
  {
    group: "On the table",
    items: [
      {
        part: "SunFounder PiCar-X kit",
        role: "Driving, camera, and audio",
        notes: "Built. Driving is calibrated, and right turns are still weird. The camera follows a face.",
        status: "have",
      },
      {
        part: "Raspberry Pi 5 (4GB)",
        role: "Onboard computer",
        notes: "On the chassis and on our Wi-Fi.",
        status: "have",
      },
      {
        part: "Official 27W power supply",
        role: "Power for the Pi",
        notes: "The official supply for a Raspberry Pi 5.",
        status: "have",
      },
    ],
  },
];
