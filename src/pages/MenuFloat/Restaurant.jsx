import Navigation from "../../components/componentsMain/menu/Navigation";
import MenuExplorer from "../../components/componentsArticles/MenuExplorer";
import CardRestaurant from "../../components/componentsMain/cards/CardRestaurant";

export default function Restaurant() {
  return(
    <div>

      <div className="explorer">
        <h1 className="textRed">Gastrônomia</h1>
        <h1 className="textWhite"> Paraty</h1>
      </div>
      <Navigation />
      <MenuExplorer />
      <CardRestaurant />
    </div>
  )
}