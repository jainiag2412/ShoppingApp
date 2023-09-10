import Toast from "react-native-simple-toast";
class FunctionUtils {
  static showToast(toastString) {
    setTimeout(() => Toast.show(toastString, Toast.SHORT), 10);
  }

  static showLongToast(toastString) {
    setTimeout(() => Toast.show(toastString, Toast.LONG), 10);
  }
}

export default FunctionUtils;
