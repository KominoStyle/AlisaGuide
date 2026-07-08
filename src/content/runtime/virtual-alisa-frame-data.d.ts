declare module "virtual:alisa-frame-data" {
  type FrameRow =
    | [string, string, string, string, string, string]
    | [string, string, string, string, string, string, string[]];
  /** Generated positional frame data, `Record<char, Record<notation, row>>`. */
  export const FD: Record<string, Record<string, FrameRow>>;
}
