export interface Options {
    menuActions(): Promise<void | string | undefined>;
    handleMenu(choice: string): Promise<void>;
    askQuestion(name: string, type:  string, message: string): void;
    askVideo(video: string): Promise<void | string | undefined>;
    welcome(): Promise<void>;
    download(url: string): Promise<void>;
    about(): Promise<void>;
    exit(): Promise<void>;
    unknown(): Promise<void>;
}