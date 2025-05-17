declare module "aos" {
  interface AosOptions {
    duration?: number;
    easing?: string;
    once?: boolean;
    offset?: number;
    delay?: number;
    anchorPlacement?: string;
    startEvent?: string;
    disable?: boolean | ((options: any) => boolean);
    mirror?: boolean;
  }

  interface AOS {
    init(options?: AosOptions): void;
    refresh(hard?: boolean): void;
    refreshHard(): void;
  }

  const aos: AOS;
  export default aos;
}
