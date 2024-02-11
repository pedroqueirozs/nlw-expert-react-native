import { View, Image, Text } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";

import { Feather } from "@expo/vector-icons";
import { UseCartStore } from "@/stors/cardStore";

import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency";

import { Button } from "@/components/button";
import { LinkButton } from "@/components/link-button";

export default function Product() {
  const { id } = useLocalSearchParams();
  const cartStore = UseCartStore();
  const navigation = useNavigation();
  const product = PRODUCTS.filter((item) => item.id === id)[0];

  function handleAddCart() {
    cartStore.add(product);
    navigation.goBack();
  }

  return (
    <View className="flex-1">
      <Image
        source={product.cover}
        className="w-full h-52"
        resizeMode="cover"
      />

      <View className="p-5 mt-8 flex-1 ">
        <Text className=" text-lime-400 text-2xl font-heading my-2 ">
          {formatCurrency(product.price)}
        </Text>

        <Text className="text-slate-400 font-body text-base leading-6 mb-6">
          {" "}
          {product.description}
        </Text>
        {product.ingredients.map((ingredient) => (
          <Text
            key={ingredient}
            className="text-slate-400 font-body text-base leading-6"
          >
            {"\u2022"}
            {ingredient}
          </Text>
        ))}
      </View>

      <View className=" pd-5 pb-8 gap-5">
        <Button onPress={handleAddCart}>
          <Button.Text>Adicionar ao pedido</Button.Text>
          <Button.Icon>
            <Feather name="plus-circle" size={20} />
          </Button.Icon>
        </Button>
        <LinkButton title="Voltar ao Cárdapio" href="/" />
      </View>
    </View>
  );
}
