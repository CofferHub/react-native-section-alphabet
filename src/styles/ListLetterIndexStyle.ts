const sizes = {
  containerWidth: 20,
  itemHeight: 15,
  itemFontSize: 16,
};

const styles: any = {
  letterIndexContainer: {
    width: sizes.containerWidth,
    height: "100%",
    position: "absolute",
    top: 0,
    right: 5,
    padding: 5,
  },

  letterIndexList: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },

  letterIndexItem: {
    width: sizes.containerWidth,
    height: sizes.itemHeight,
    alignItems: "center",
    justifyContent: "center",
  },

  letterIndexLabel: {
    fontSize: sizes.itemFontSize,
    fontWeight: "bold",
    color: "grey",
  },
};

export default styles;
