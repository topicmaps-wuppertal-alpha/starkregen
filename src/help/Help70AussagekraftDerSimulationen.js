import React, { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
/* eslint-disable jsx-a11y/anchor-is-valid */

const Component = () => {
  const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);

  return (
    <GenericModalMenuSection
      sectionKey='aussagekraft'
      sectionTitle='Aussagekraft der Simulationen'
      sectionBsStyle='info'
      sectionContent={
        <div>
          <p>
            Unsere Starkregengefahrenkarte zeigt die Ergebnisse von Simulationen, die dem heutigen
            Stand der Technik entsprechen. Die Berechnungen basieren auf einem vereinfachten Modell
            der tatsächlichen Verhältnisse. Für eine noch differenziertere Modellierung fehlen zum
            einen die Daten, zum anderen ließe sich die automatisierte Berechnung nicht mehr in
            erlebbarer Zeit durchführen!{" "}
          </p>

          <p>Was sind die wichtigsten Vereinfachungen, die wir vornehmen mussten?</p>

          <ul>
            <li>
              Das abfließende Regenwasser findet in <strong>Kellergeschossen</strong>, die als sog.{" "}
              <strong>Retentionsräume</strong> wirken, ein Rückhaltevolumen, das wir nicht
              berücksichtigt haben. Hierzu fehlen uns die Daten. Es ist wegen der unbekannten
              Eintrittspunkte auch nicht modellierbar, in welche Kellergeschosse tatsächlich Wasser
              hineinlaufen würde!
            </li>

            <li>
              Teile des Regenwassers würden in der Realität durch <strong>Versickerung</strong> oder{" "}
              <strong>Verdunstung</strong> verschwinden. Diese Effekte haben wir aus fachlichen
              Gründen bewusst vernachlässigt. Die Verdunstung spielt im Starkregenfall nur eine
              untergeordnete Rolle und die Versickerung ist stark von den Ausgangsbedingungen
              abhängig.
            </li>
          </ul>

          <p>
            <strong>
              Die Vereinfachungen bewirken, dass die Simulationen den schlimmsten anzunehmenden Fall
              zeigen.
            </strong>{" "}
            Wenn es z. B. in den Tagen vor dem angenommenen Starkregenereignis schon so viel
            geregnet hätte, dass der Boden mit Wasser gesättigt ist, würde der Effekt der
            Versickerung ja tatsächlich wegfallen! Es bleibt aber eine gewisse Tendenz zur lokalen
            Überzeichnung der Wassertiefen, die sich bei einem realen Regen der angenommenen Stärke
            einstellen würden. Um diesem Umstand Rechnung zu tragen, geben wir bei der{" "}
            <a class='renderAsLink' onClick={() => setAppMenuActiveMenuSection("wasserstand")}>
              Abfrage der maximalen Wassertiefe oder der maximalen Fließgeschwindigkeit
            </a>{" "}
            ab einer berechneten Wassertiefe von 150 cm nur noch "größer als 150 cm" ({">"} 150 cm)
            und ab einer berechneten Fließgeschwindigkeit von 6 m/s nur noch "{">"} 6 m/s" als
            Ergebnis an.
          </p>

          <p>
            Außerdem konnten wir die Wirkung des Kanalnetzes, das einen Teil des Starkregens
            abführt, nur vereinfacht modellieren. Hierdurch kann es zu Abweichungen zwischen den
            Simulationsergebnissen und den Überflutungen durch ein reales Regenereignis kommen.
          </p>

          <p>
            Auch das Digitale Geländemodell (DGM), das für die Simulationen verwendet wird, kann
            Fehler aufweisen. Helfen Sie uns dabei, das DGM sukzessive zu verbessern, indem Sie uns
            vermutete{" "}
            <a
              class='renderAsLink'
              onClick={() => setAppMenuActiveMenuSection("modellfehlermelden")}
            >
              Fehler im Geländemodell melden
            </a>
            ! Zuletzt kann es sein, dass ein bestehendes Gebäude in den Simulationen nicht
            berücksichtigt wurde, weil es zum Zeitpunkt der Datenbereitstellung für die
            Simulationsberechnungen noch nicht im Liegenschaftskataster nachgewiesen war.
          </p>
        </div>
      }
    />
  );
};
export default Component;
