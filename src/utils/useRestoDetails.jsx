import { useState,useEffect } from "react";
const useRestoDetails = (id) => {
  const [restoData, setRestoData] = useState(null);
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    getMenu();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  async function getMenu() {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await response.json();
    const checkData = json?.data?.cards[2]?.card?.card?.info;
    const checkData2 =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;

    if (checkData != undefined) {
      setRestoData(checkData);
    }
    if (checkData2 != undefined) {
      setMenuItems(checkData2);
    }
  }
  return { restoData, menuItems };;
};

export default useRestoDetails;
