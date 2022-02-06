import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View, Image} from "react-native";
import AccImage from "./assets/products/acc1.jpg";
import Avatar from "./assets/icons/avatar.png";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Products</Text>
			<View style={styles.productCard}>
				<View>
					<Image source={AccImage} style={styles.productImage} resizeMode={"contain"} />
				</View>
				<View style={styles.productContent}>
					<Text style={styles.productName}>하네스</Text>
					<Text style={styles.productPrice}>50000원</Text>
					<View style={styles.productFooter}>
						<View style={styles.productSeller}>
							<Image source={Avatar} style={styles.productAvatar} />
							<Text style={styles.productSellerName}>도기멍</Text>
						</View>
						<Text style={styles.productDate}>1분전</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 32,
	},
	productCard: {
		width: 320,
		borderColor: "rgb(230,230,230)",
		borderWidth: 1,
		borderRadius: 16,
		backgroundColor: "#fff",
	},
	productImage: {
		width: "100%",
		height: 210,
	},
	productContent: {
		padding: 8,
	},
	productSeller: {
		flexDirection: "row",
		alignItems: "center",
	},
	productAvatar: {
		width: 24,
		height: 24,
	},
	productFooter: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 12,
	},
	productName: {
		fontSize: 16,
	},
	productPrice: {
		fontSize: 18,
		fontWeight: "600",
		marginTop: 8,
	},
	productSellerName: {
		fontSize: 16,
	},
	productDate: {
		fontSize: 16,
	},
});
