declare module "*.scss" {
    interface IClassNames {
        [classname: string]: string;
    }

    const classNames: IClassNames;
    export = classNames;
}

declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare const __IS__DEV__: boolean;
