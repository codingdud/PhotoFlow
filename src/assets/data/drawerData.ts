import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";


const useData = () => {
    const navigation=useNavigation<DrawerNavigationProp<DorwarStackPramList>>()

    const DATA1: RenderDrawerItemProps[]=[
    { label: "Home", iconName: "home", colorIndex: 0, navigateTo: "Home", navigation: navigation },
    { label: "Article", iconName: "book", colorIndex: 1, navigateTo: "Article", navigation: navigation },
    { label: "Room", iconName: "book", colorIndex: 1, navigateTo: "Room", navigation: navigation },
    { label: "Transaction", iconName: "money", colorIndex: 2, navigateTo: "Transaction", navigation: navigation },
    { label: "Advance", iconName: "money", colorIndex: 3, navigateTo: "Advance", navigation: navigation },
    { label: "Expense", iconName: "money", colorIndex: 4, navigateTo: "Expense", navigation: navigation }
    ];
    const DATA2: RenderDrawerItemProps[]= [
    { label: "Season Vehicle", iconName: "car", colorIndex: 5, navigateTo: "SeasonVehicle", navigation: navigation },
    { label: "Crop Buyer", iconName: "shopping-cart", colorIndex: 6, navigateTo: "CropBuyer", navigation: navigation },
    { label: "Village", iconName: "map", colorIndex: 7, navigateTo: "Village", navigation: navigation },
    { label: "Owner Vs Agent", iconName: "user", colorIndex: 8, navigateTo: "OwnerVsAgent", navigation: navigation }
    ];

    const DATA3: RenderDrawerItemProps[] = [
    { label: "Employee", iconName: "user", colorIndex: 9, navigateTo: "Employee", navigation: navigation },
    { label: "Leave", iconName: "user", colorIndex: 10, navigateTo: "Leave", navigation: navigation },
    { label: "Report", iconName: "user", colorIndex: 11, navigateTo: "Report", navigation: navigation },
    { label: "Contact Us", iconName: "user", colorIndex: 12, navigateTo: "ContactUs", navigation: navigation }
    ];
    const DATA4: RenderDrawerItemProps[] = [
    { label: "Share", iconName: "share-alt", colorIndex: 13, navigation: navigation }
    ];
return {DATA1,DATA2,DATA3,DATA4}
}
export default useData