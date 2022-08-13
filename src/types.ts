export interface Options {
    askVideo(video: string): Promise<void | string | undefined>;
    welcome(): Promise<void>;
    menuActions(): Promise<string | void | undefined>;
    handleMenu(choice: string): Promise<void>;
    askQuestion(name: string, type: string, message: string): Promise<void>;
    download(url: string): Promise<void>;
    about(): Promise<void>;
    exit(): Promise<void>;
    unknown(): Promise<void>;
}