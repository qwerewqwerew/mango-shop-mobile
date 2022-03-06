import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Avatar from "./assets/icons/avatar.png";
import { API_URL } from "./config/constants";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

export default function App() {
	const [banners, setBanners] = React.useState([]);
	const [products, setProducts] = React.useState([]);
	React.useEffect(() => {
		axios
			.get(`${API_URL}/products`)
			.then((result) => {
				setProducts(result.data.products);
				console.log(result.data.products);

			})
			.catch((error) => {
				console.error(error);
			});
		axios
			.get(`${API_URL}/banners`)
			.then((result) => {
				setBanners(result.data.banners);
				console.log(result.data.banners);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.banners}>
					{banners.map((banner,index)=>{
						return(
							<Image source={{ uri: `${API_URL}/${banner.imageUrl}` }} style={styles.bannerImage} />
						)
					})}
				</View>
				<Text style={styles.headline}>Products</Text>
				<View style={styles.productList}>
					{products.map((product, index) => {
						return (
							<View style={styles.productCard} key={index}>
								{product.soldout === 1 && <View style={styles.productBlur} />}
								<View>
									<Image source={{ uri: `${API_URL}/${product.imageUrl}` }} style={styles.productImage} resizeMode={"contain"} />
								</View>
								<View style={styles.productContent}>
									<Text style={styles.productName}>{product.name}</Text>
									<Text style={styles.productPrice}>{product.price}원</Text>
									<View style={styles.productFooter}>
										<View style={styles.productSeller}>
											<Image source={Avatar} style={styles.productAvatar} />
											<Text style={styles.productSellerName}>{product.seller}</Text>
										</View>
										<Text style={styles.productDate}>{dayjs(product.createdAt).fromNow()}</Text>
									</View>
								</View>
							</View>
						);
					})}
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 32,
	},
	productList: {
		alignItems: "center",
	},
	headline: {
		fontSize: 24,
		fontWeight: "800",
		marginBottom: 24,
		textAlign: "center",
	},
	productCard: {
		width: 320,
		borderColor: "rgb(230,230,230)",
		borderWidth: 1,
		borderRadius: 16,
		backgroundColor: "#fff",
		marginBottom: 10,
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
	productList: {
		alignItems: "center",
	},
	headline: {
		fontSize: 24,
		fontWeight: "800",
		marginBottom: 24,
	},
	productBlur: {
		position: "absolute",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: "#ffffffaa",
		zIndex: 999,
	},
	bannerImage: {
		width: "100%",
		height: "100%",
		position:"absolute",
		top:0,
		left:0,
	},
	banners: {
		width: "100vw",
		height: 300,
		position:"relative",
		top:0,
		left:0,
	},
});
