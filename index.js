import { NativeModules, Image } from "react-native";

const { RNTFLiteImageRecognition } = NativeModules;

class TFLiteImageRecognition {
    constructor(data) {
        this.state = RNTFLiteImageRecognition.createImageRecognizer(data).catch(err => console.log(err));
    }

    async recognize(data) {
        await this.state;

        data["image"] =
            Image.resolveAssetSource(data["image"]) != null
                ? Image.resolveAssetSource(data["image"]).uri
                : data["image"];

        return RNTFLiteImageRecognition.recognize(data);
    }

    async close() {
        await this.state;

        RNTFLiteImageRecognition.close();
    }
}

export { TFLiteImageRecognition };
