module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "TwoUnits": "32px",
        "FourUnits": "64px",
        "SixUnits": "96px",
        "ThreeUnits": "48px",
        "OneAndHalfUnits": "24px",
        "Unit": "16px",
        "HalfUnit": "8px",
        "FiveUnits": "80px"
      },
      "borderRadius": {
        "Radius4": "4px",
        "Radius2": "2px",
        "Radius8": "8px",
        "Round": "50%"
      },
      "scale": {
        "Medium": "96px",
        "XXLarge": "288px",
        "XSmall": "16px",
        "Small": "48px",
        "MaxWidth": "1400px",
        "Large": "144px",
        "XLarge": "192px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./*.html"
  ]
}