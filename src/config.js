import { starkregenConstants } from "@cismet-dev/react-cismap-rainhazardmaps/constants";

const overridingBaseLayerConf = {};

const config = {
  hinweisDataUrl: "https://wunda-geoportal.cismet.de/data/sgk_hinweise.json",
  upperleftX: 780160.203, //take a depth3857.tif and run gdalinfo on it get the pixelsize and upperleftcorner info from there
  upperleftY: 6678245.042,
  pixelsize: 1.595781324768881,

  minAnimationZoom: 17,
  minFeatureInfoZoom: 19,
  timeSeriesAvailable: true,
  rasterfariURL: "https://rain-rasterfari-wuppertal.cismet.de",
  modelWMS:
    "https://starkregenwms-wuppertal.cismet.de/geoserver/wms?SERVICE=WMS",

  simulations: [
    {
      depthLayer: "starkregen:L_T50_depth3857",
      // depthLayer: "starkregen:L_T50_steps_depth3857_01h_04m",
      velocityLayer: "starkregen:L_T50_velocity3857",
      // velocityLayer: "starkregen:L_T50_steps_velocity3857_01h_04m",

      directionsLayer: "starkregen:L_T50_direction3857",
      depthStyle: "starkregen:depth",
      velocityStyle: "starkregen:velocity",
      directionStyle: "starkregen:direction",

      animation: "T50/",
      name: "Stärke 6",
      title: "Starkregen SRI 6 (38,5 l/m² in 2h)",
      icon: "bar-chart",
      subtitle:
        "Simulation eines zweistündigen Starkregens mit 38,5 Liter/m² Niederschlag (Starkregenindex SRI 6) in ganz Wuppertal, statistische Wiederkehrzeit 50 Jahre",
      depthTimeDimensionLayers: [
        "starkregen:L_T50_steps_depth3857_00h_05m",
        "starkregen:L_T50_steps_depth3857_00h_10m",
        "starkregen:L_T50_steps_depth3857_00h_15m",
        "starkregen:L_T50_steps_depth3857_00h_20m",
        "starkregen:L_T50_steps_depth3857_00h_25m",
        "starkregen:L_T50_steps_depth3857_00h_30m",
        "starkregen:L_T50_steps_depth3857_00h_35m",
        "starkregen:L_T50_steps_depth3857_00h_40m",
        "starkregen:L_T50_steps_depth3857_00h_45m",
        "starkregen:L_T50_steps_depth3857_00h_50m",
        "starkregen:L_T50_steps_depth3857_00h_54m",
        "starkregen:L_T50_steps_depth3857_00h_59m",
        "starkregen:L_T50_steps_depth3857_01h_04m",
        "starkregen:L_T50_steps_depth3857_01h_09m",
        "starkregen:L_T50_steps_depth3857_01h_14m",
        "starkregen:L_T50_steps_depth3857_01h_19m",
        "starkregen:L_T50_steps_depth3857_01h_24m",
        "starkregen:L_T50_steps_depth3857_01h_29m",
        "starkregen:L_T50_steps_depth3857_01h_34m",
        "starkregen:L_T50_steps_depth3857_01h_39m",
        "starkregen:L_T50_steps_depth3857_01h_44m",
        "starkregen:L_T50_steps_depth3857_01h_49m",
        "starkregen:L_T50_steps_depth3857_01h_54m",
        "starkregen:L_T50_steps_depth3857_02h_00m",
      ],
      depthTimeDimensionLayerDescriptions: [
        "00h 05m",
        "00h 10m",
        "00h 15m",
        "00h 20m",
        "00h 25m",
        "00h 30m",
        "00h 35m",
        "00h 40m",
        "00h 45m",
        "00h 50m",
        "00h 55m",
        "01h 00m",
        "01h 05m",
        "01h 09m",
        "01h 15m",
        "01h 20m",
        "01h 24m",
        "01h 30m",
        "01h 35m",
        "01h 40m",
        "01h 44m",
        "01h 50m",
        "01h 55m",
        "02h 00m",
      ],
      timeDimensionLayerX: [
        5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
        95, 100, 105, 110, 115, 120,
      ],
      velocityTimeDimensionLayers: [
        "starkregen:L_T50_steps_velocity3857_00h_05m",
        "starkregen:L_T50_steps_velocity3857_00h_10m",
        "starkregen:L_T50_steps_velocity3857_00h_15m",
        "starkregen:L_T50_steps_velocity3857_00h_20m",
        "starkregen:L_T50_steps_velocity3857_00h_25m",
        "starkregen:L_T50_steps_velocity3857_00h_30m",
        "starkregen:L_T50_steps_velocity3857_00h_35m",
        "starkregen:L_T50_steps_velocity3857_00h_40m",
        "starkregen:L_T50_steps_velocity3857_00h_45m",
        "starkregen:L_T50_steps_velocity3857_00h_50m",
        "starkregen:L_T50_steps_velocity3857_00h_54m",
        "starkregen:L_T50_steps_velocity3857_00h_59m",
        "starkregen:L_T50_steps_velocity3857_01h_04m",
        "starkregen:L_T50_steps_velocity3857_01h_09m",
        "starkregen:L_T50_steps_velocity3857_01h_14m",
        "starkregen:L_T50_steps_velocity3857_01h_19m",
        "starkregen:L_T50_steps_velocity3857_01h_24m",
        "starkregen:L_T50_steps_velocity3857_01h_29m",
        "starkregen:L_T50_steps_velocity3857_01h_34m",
        "starkregen:L_T50_steps_velocity3857_01h_39m",
        "starkregen:L_T50_steps_velocity3857_01h_44m",
        "starkregen:L_T50_steps_velocity3857_01h_49m",
        "starkregen:L_T50_steps_velocity3857_01h_54m",
        "starkregen:L_T50_steps_velocity3857_02h_00m",
      ],
      velocityTimeDimensionLayerDescriptions: [
        "00h 05m",
        "00h 10m",
        "00h 15m",
        "00h 20m",
        "00h 25m",
        "00h 30m",
        "00h 35m",
        "00h 40m",
        "00h 45m",
        "00h 50m",
        "00h 55m",
        "01h 00m",
        "01h 05m",
        "01h 09m",
        "01h 15m",
        "01h 20m",
        "01h 24m",
        "01h 30m",
        "01h 35m",
        "01h 40m",
        "01h 44m",
        "01h 50m",
        "01h 55m",
        "02h 00m",
      ],
    },
    {
      depthLayer: "starkregen:L_T100_depth3857",
      velocityLayer: "starkregen:L_T100_velocity3857",
      directionsLayer: "starkregen:L_T100_direction3857",
      depthStyle: "starkregen:depth",
      velocityStyle: "starkregen:velocity",
      directionStyle: "starkregen:direction",
      animation: "T100/",
      name: "Stärke 7",
      icon: "bar-chart",
      title: "Starkregen SRI 7 (42 l/m² in 2h)",
      subtitle:
        "Simulation eines zweistündigen Starkregens mit 42 Liter/m² Niederschlag (Starkregenindex SRI 7) in ganz Wuppertal, statistische Wiederkehrzeit 100 Jahre",
      depthTimeDimensionLayers: [
        "starkregen:L_T100_steps_depth3857_00h_05m",
        "starkregen:L_T100_steps_depth3857_00h_10m",
        "starkregen:L_T100_steps_depth3857_00h_15m",
        "starkregen:L_T100_steps_depth3857_00h_20m",
        "starkregen:L_T100_steps_depth3857_00h_25m",
        "starkregen:L_T100_steps_depth3857_00h_30m",
        "starkregen:L_T100_steps_depth3857_00h_35m",
        "starkregen:L_T100_steps_depth3857_00h_39m",
        "starkregen:L_T100_steps_depth3857_00h_44m",
        "starkregen:L_T100_steps_depth3857_00h_49m",
        "starkregen:L_T100_steps_depth3857_00h_55m",
        "starkregen:L_T100_steps_depth3857_00h_59m",
        "starkregen:L_T100_steps_depth3857_01h_04m",
        "starkregen:L_T100_steps_depth3857_01h_09m",
        "starkregen:L_T100_steps_depth3857_01h_15m",
        "starkregen:L_T100_steps_depth3857_01h_19m",
        "starkregen:L_T100_steps_depth3857_01h_24m",
        "starkregen:L_T100_steps_depth3857_01h_30m",
        "starkregen:L_T100_steps_depth3857_01h_34m",
        "starkregen:L_T100_steps_depth3857_01h_39m",
        "starkregen:L_T100_steps_depth3857_01h_44m",
        "starkregen:L_T100_steps_depth3857_01h_49m",
        "starkregen:L_T100_steps_depth3857_01h_54m",
        "starkregen:L_T100_steps_depth3857_01h_59m",
      ],
      depthTimeDimensionLayerDescriptions: [
        "00h 05m",
        "00h 10m",
        "00h 15m",
        "00h 20m",
        "00h 25m",
        "00h 30m",
        "00h 35m",
        "00h 40m",
        "00h 45m",
        "00h 50m",
        "00h 55m",
        "01h 00m",
        "01h 05m",
        "01h 09m",
        "01h 15m",
        "01h 20m",
        "01h 24m",
        "01h 30m",
        "01h 35m",
        "01h 40m",
        "01h 44m",
        "01h 50m",
        "01h 55m",
        "02h 00m",
      ],
      timeDimensionLayerX: [
        5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
        95, 100, 105, 110, 115, 120,
      ],
      velocityTimeDimensionLayers: [
        "starkregen:L_T100_steps_velocity3857_00h_05m",
        "starkregen:L_T100_steps_velocity3857_00h_10m",
        "starkregen:L_T100_steps_velocity3857_00h_15m",
        "starkregen:L_T100_steps_velocity3857_00h_20m",
        "starkregen:L_T100_steps_velocity3857_00h_25m",
        "starkregen:L_T100_steps_velocity3857_00h_30m",
        "starkregen:L_T100_steps_velocity3857_00h_35m",
        "starkregen:L_T100_steps_velocity3857_00h_39m",
        "starkregen:L_T100_steps_velocity3857_00h_44m",
        "starkregen:L_T100_steps_velocity3857_00h_49m",
        "starkregen:L_T100_steps_velocity3857_00h_55m",
        "starkregen:L_T100_steps_velocity3857_00h_59m",
        "starkregen:L_T100_steps_velocity3857_01h_04m",
        "starkregen:L_T100_steps_velocity3857_01h_09m",
        "starkregen:L_T100_steps_velocity3857_01h_15m",
        "starkregen:L_T100_steps_velocity3857_01h_19m",
        "starkregen:L_T100_steps_velocity3857_01h_24m",
        "starkregen:L_T100_steps_velocity3857_01h_30m",
        "starkregen:L_T100_steps_velocity3857_01h_34m",
        "starkregen:L_T100_steps_velocity3857_01h_39m",
        "starkregen:L_T100_steps_velocity3857_01h_44m",
        "starkregen:L_T100_steps_velocity3857_01h_49m",
        "starkregen:L_T100_steps_velocity3857_01h_54m",
        "starkregen:L_T100_steps_velocity3857_01h_59m",
      ],
      velocityTimeDimensionLayerDescriptions: [
        "00h 05m",
        "00h 10m",
        "00h 15m",
        "00h 20m",
        "00h 25m",
        "00h 30m",
        "00h 35m",
        "00h 40m",
        "00h 45m",
        "00h 50m",
        "00h 55m",
        "01h 00m",
        "01h 05m",
        "01h 09m",
        "01h 15m",
        "01h 20m",
        "01h 24m",
        "01h 30m",
        "01h 35m",
        "01h 40m",
        "01h 44m",
        "01h 50m",
        "01h 55m",
        "02h 00m",
      ],
    },
    {
      depthLayer: "starkregen:L_90mm_depth3857",
      velocityLayer: "starkregen:L_90mm_velocity3857",
      directionsLayer: "starkregen:L_90mm_direction3857",
      depthStyle: "starkregen:depth",
      velocityStyle: "starkregen:velocity",
      directionStyle: "starkregen:direction",
      animation: "90mm/",
      name: "Stärke 10",
      icon: "bitbucket",
      title: "Starkregen SRI 10 (90 l/m² in 1h)",
      subtitle:
        "Simulation eines einstündigen Starkregens mit 90 Liter/m² Niederschlag (Starkregenindex SRI 10) in ganz Wuppertal",
      depthTimeDimensionLayers: [
        "starkregen:L_90mm_steps_depth3857_00h_05m",
        "starkregen:L_90mm_steps_depth3857_00h_09m",
        "starkregen:L_90mm_steps_depth3857_00h_15m",
        "starkregen:L_90mm_steps_depth3857_00h_20m",
        "starkregen:L_90mm_steps_depth3857_00h_25m",
        "starkregen:L_90mm_steps_depth3857_00h_30m",
        "starkregen:L_90mm_steps_depth3857_00h_35m",
        "starkregen:L_90mm_steps_depth3857_00h_40m",
        "starkregen:L_90mm_steps_depth3857_00h_45m",
        "starkregen:L_90mm_steps_depth3857_00h_50m",
        "starkregen:L_90mm_steps_depth3857_00h_55m",
        "starkregen:L_90mm_steps_depth3857_00h_59m",
        "starkregen:L_90mm_steps_depth3857_01h_04m",
        "starkregen:L_90mm_steps_depth3857_01h_09m",
        "starkregen:L_90mm_steps_depth3857_01h_14m",
        "starkregen:L_90mm_steps_depth3857_01h_19m",
        "starkregen:L_90mm_steps_depth3857_01h_24m",
        "starkregen:L_90mm_steps_depth3857_01h_29m",
        "starkregen:L_90mm_steps_depth3857_01h_34m",
        "starkregen:L_90mm_steps_depth3857_01h_39m",
        "starkregen:L_90mm_steps_depth3857_01h_44m",
        "starkregen:L_90mm_steps_depth3857_01h_49m",
        "starkregen:L_90mm_steps_depth3857_01h_54m",
        "starkregen:L_90mm_steps_depth3857_01h_59m",
      ],
      depthTimeDimensionLayerDescriptions: [
        "00h 05m",
        "00h 10m",
        "00h 15m",
        "00h 20m",
        "00h 25m",
        "00h 30m",
        "00h 35m",
        "00h 40m",
        "00h 45m",
        "00h 50m",
        "00h 55m",
        "01h 00m",
        "01h 05m",
        "01h 09m",
        "01h 15m",
        "01h 20m",
        "01h 24m",
        "01h 30m",
        "01h 35m",
        "01h 40m",
        "01h 44m",
        "01h 50m",
        "01h 55m",
        "02h 00m",
      ],
      timeDimensionLayerX: [
        5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
        95, 100, 105, 110, 115, 120,
      ],
      velocityTimeDimensionLayers: [
        "starkregen:L_90mm_steps_velocity3857_00h_05m",
        "starkregen:L_90mm_steps_velocity3857_00h_09m",
        "starkregen:L_90mm_steps_velocity3857_00h_15m",
        "starkregen:L_90mm_steps_velocity3857_00h_20m",
        "starkregen:L_90mm_steps_velocity3857_00h_25m",
        "starkregen:L_90mm_steps_velocity3857_00h_30m",
        "starkregen:L_90mm_steps_velocity3857_00h_35m",
        "starkregen:L_90mm_steps_velocity3857_00h_40m",
        "starkregen:L_90mm_steps_velocity3857_00h_45m",
        "starkregen:L_90mm_steps_velocity3857_00h_50m",
        "starkregen:L_90mm_steps_velocity3857_00h_55m",
        "starkregen:L_90mm_steps_velocity3857_00h_59m",
        "starkregen:L_90mm_steps_velocity3857_01h_04m",
        "starkregen:L_90mm_steps_velocity3857_01h_09m",
        "starkregen:L_90mm_steps_velocity3857_01h_14m",
        "starkregen:L_90mm_steps_velocity3857_01h_19m",
        "starkregen:L_90mm_steps_velocity3857_01h_24m",
        "starkregen:L_90mm_steps_velocity3857_01h_29m",
        "starkregen:L_90mm_steps_velocity3857_01h_34m",
        "starkregen:L_90mm_steps_velocity3857_01h_39m",
        "starkregen:L_90mm_steps_velocity3857_01h_44m",
        "starkregen:L_90mm_steps_velocity3857_01h_49m",
        "starkregen:L_90mm_steps_velocity3857_01h_54m",
        "starkregen:L_90mm_steps_velocity3857_01h_59m",
      ],
      velocityTimeDimensionLayerDescriptions: [
        "00h 05m",
        "00h 10m",
        "00h 15m",
        "00h 20m",
        "00h 25m",
        "00h 30m",
        "00h 35m",
        "00h 40m",
        "00h 45m",
        "00h 50m",
        "00h 55m",
        "01h 00m",
        "01h 05m",
        "01h 09m",
        "01h 15m",
        "01h 20m",
        "01h 24m",
        "01h 30m",
        "01h 35m",
        "01h 40m",
        "01h 44m",
        "01h 50m",
        "01h 55m",
        "02h 00m",
      ],
    },
    {
      depthLayer: "starkregen:L_Extrem2018_depth3857",
      velocityLayer: "starkregen:L_Extrem2018_velocity3857",
      directionsLayer: "starkregen:L_Extrem2018_direction3857",
      depthStyle: "starkregen:depth",
      velocityStyle: "starkregen:velocity",
      directionStyle: "starkregen:direction",
      animation: "Extrem2018/",
      name: "29.05.18",
      icon: "calendar",
      title: "Regen vom 29.05.2018 (SRI 11)",
      subtitle:
        "Simulation des Starkregens vom 29.05.2018 (Starkregenindex SRI 11) für das gesamte Stadtgebiet anhand gemessener Niederschlagsmengen",
      depthTimeDimensionLayers: [
        "starkregen:L_Extrem2018_steps_depth3857_00h_05m",
        "starkregen:L_Extrem2018_steps_depth3857_00h_10m",
        "starkregen:L_Extrem2018_steps_depth3857_00h_15m",
        "starkregen:L_Extrem2018_steps_depth3857_00h_20m",
        "starkregen:L_Extrem2018_steps_depth3857_00h_25m",
        "starkregen:L_Extrem2018_steps_depth3857_00h_30m",
        "starkregen:L_Extrem2018_steps_depth3857_00h_35m",
        "starkregen:L_Extrem2018_steps_depth3857_00h_40m",
        "starkregen:L_Extrem2018_steps_depth3857_00h_45m",
        "starkregen:L_Extrem2018_steps_depth3857_00h_50m",
        "starkregen:L_Extrem2018_steps_depth3857_00h_54m",
        "starkregen:L_Extrem2018_steps_depth3857_01h_00m",
        "starkregen:L_Extrem2018_steps_depth3857_01h_05m",
        "starkregen:L_Extrem2018_steps_depth3857_01h_09m",
        "starkregen:L_Extrem2018_steps_depth3857_01h_14m",
        "starkregen:L_Extrem2018_steps_depth3857_01h_19m",
        "starkregen:L_Extrem2018_steps_depth3857_01h_24m",
        "starkregen:L_Extrem2018_steps_depth3857_01h_29m",
        "starkregen:L_Extrem2018_steps_depth3857_01h_34m",
        "starkregen:L_Extrem2018_steps_depth3857_01h_39m",
        "starkregen:L_Extrem2018_steps_depth3857_01h_44m",
        "starkregen:L_Extrem2018_steps_depth3857_01h_49m",
        "starkregen:L_Extrem2018_steps_depth3857_01h_54m",
        "starkregen:L_Extrem2018_steps_depth3857_01h_59m",
      ],
      depthTimeDimensionLayerDescriptions: [
        "00h 05m",
        "00h 10m",
        "00h 15m",
        "00h 20m",
        "00h 25m",
        "00h 30m",
        "00h 35m",
        "00h 40m",
        "00h 45m",
        "00h 50m",
        "00h 55m",
        "01h 00m",
        "01h 05m",
        "01h 09m",
        "01h 15m",
        "01h 20m",
        "01h 24m",
        "01h 30m",
        "01h 35m",
        "01h 40m",
        "01h 44m",
        "01h 50m",
        "01h 55m",
        "02h 00m",
      ],
      timeDimensionLayerX: [
        5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
        95, 100, 105, 110, 115, 120,
      ],
      velocityTimeDimensionLayers: [
        "starkregen:L_Extrem2018_steps_velocity3857_00h_05m",
        "starkregen:L_Extrem2018_steps_velocity3857_00h_10m",
        "starkregen:L_Extrem2018_steps_velocity3857_00h_15m",
        "starkregen:L_Extrem2018_steps_velocity3857_00h_20m",
        "starkregen:L_Extrem2018_steps_velocity3857_00h_25m",
        "starkregen:L_Extrem2018_steps_velocity3857_00h_30m",
        "starkregen:L_Extrem2018_steps_velocity3857_00h_35m",
        "starkregen:L_Extrem2018_steps_velocity3857_00h_40m",
        "starkregen:L_Extrem2018_steps_velocity3857_00h_45m",
        "starkregen:L_Extrem2018_steps_velocity3857_00h_50m",
        "starkregen:L_Extrem2018_steps_velocity3857_00h_54m",
        "starkregen:L_Extrem2018_steps_velocity3857_01h_00m",
        "starkregen:L_Extrem2018_steps_velocity3857_01h_05m",
        "starkregen:L_Extrem2018_steps_velocity3857_01h_09m",
        "starkregen:L_Extrem2018_steps_velocity3857_01h_14m",
        "starkregen:L_Extrem2018_steps_velocity3857_01h_19m",
        "starkregen:L_Extrem2018_steps_velocity3857_01h_24m",
        "starkregen:L_Extrem2018_steps_velocity3857_01h_29m",
        "starkregen:L_Extrem2018_steps_velocity3857_01h_34m",
        "starkregen:L_Extrem2018_steps_velocity3857_01h_39m",
        "starkregen:L_Extrem2018_steps_velocity3857_01h_44m",
        "starkregen:L_Extrem2018_steps_velocity3857_01h_49m",
        "starkregen:L_Extrem2018_steps_velocity3857_01h_54m",
        "starkregen:L_Extrem2018_steps_velocity3857_01h_59m",
      ],
      velocityTimeDimensionLayerDescriptions: [
        "00h 05m",
        "00h 10m",
        "00h 15m",
        "00h 20m",
        "00h 25m",
        "00h 30m",
        "00h 35m",
        "00h 40m",
        "00h 45m",
        "00h 50m",
        "00h 55m",
        "01h 00m",
        "01h 05m",
        "01h 09m",
        "01h 15m",
        "01h 20m",
        "01h 24m",
        "01h 30m",
        "01h 35m",
        "01h 40m",
        "01h 44m",
        "01h 50m",
        "01h 55m",
        "02h 00m",
      ],
    },
  ],
  backgrounds: [
    {
      layerkey: "hillshade|bplan_abkg@30|rvrGrundriss@20",
      src: "/starkregen/images/rain-hazard-map-bg/topo.png",
      title: "Top. Karte",
    },
    {
      layerkey: "rvrGrundriss@100|trueOrtho2022@75|rvrSchriftNT@100",
      src: "/starkregen/images/rain-hazard-map-bg/ortho.png",
      title: "Luftbildkarte",
    },
    {
      layerkey: "wupp-plan-live@40",
      src: "/starkregen/images/rain-hazard-map-bg/citymap.png",
      title: "Stadtplan",
    },
  ],
  heightsLegend: [
    { title: "20 cm", lt: 0.1, bg: "#AFCFF9" },
    { title: "40 cm", lt: 0.3, bg: "#FED27B" },
    { title: "75 cm", lt: 0.5, bg: "#E9B279" },
    { title: "100 cm", lt: 1.0, bg: "#DD8C7B" },
  ],
  velocityLegend: [
    { title: "0.5 m/s", lt: 0.1, bg: "#BEC356" },
    { title: "2 m/s", lt: 1, bg: "#DA723E" },
    { title: "4 m/s", lt: 3, bg: "#D64733" },
    { title: "6 m/s", lt: 5, bg: "#8F251B" },
  ],
};

const initialState = {
  displayMode: starkregenConstants.SHOW_HEIGHTS,
  valueMode: starkregenConstants.SHOW_MAXVALUES,

  modelLayerProblem: false,
  featureInfoModeActivated: false,
  currentFeatureInfoValue: undefined,
  currentFeatureInfoSelectedSimulation: undefined,
  currentFeatureInfoPosition: undefined,
  minifiedInfoBox: false,
  selectedSimulation: 0,
  backgroundLayer: undefined,
  selectedBackground: 0,
  animationEnabled: true,
  timeseriesIntermediateValuesCount: 50,
  timeseriesAninationNumerator: 20,
};

const conf = { config, overridingBaseLayerConf, initialState };
export default conf;
