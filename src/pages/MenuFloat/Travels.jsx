import Navigation from "../../components/componentsMain/menu/Navigation";
import MenuExplorer from "../../components/componentsArticles/MenuExplorer";
import CardTravels from "../../components/componentsMain/cards/CardTravels";

export default function Travels() {
  return(
    <div>

      <div className="explorer">
        <h1 className="textRed">Passeios</h1>
        <h1 className="textWhite"> Paraty</h1>
      </div>
      <Navigation />
      <MenuExplorer />
      <CardTravels />
    </div>
  )
}