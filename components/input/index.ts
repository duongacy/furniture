export const getInputClassBySize = (size: string | undefined): string => {
  const commonCl = "text-neutral-d50";
  switch (size) {
    case "large":
      return `${commonCl} px-[24px]`;
    case "small":
      return `${commonCl} px-[16px]`;
    default:
      return `${commonCl} px-[20px]`;
  }
};

export const getSizeInputIconBySize = (
  size: string | undefined
): "small" | "middle" | "large" => {
  switch (size) {
    case "large":
      return "middle";
    case "small":
      return "small";
    default:
      return "small";
  }
};
