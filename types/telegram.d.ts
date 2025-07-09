interface TelegramWebApp {
  ready: () => void;
  MainButton: {
    show: () => void;
    hide: () => void;
    setText: (text: string) => void;
  };
}

interface TelegramNamespace {
  WebApp: TelegramWebApp;
}

interface Window {
  Telegram?: TelegramNamespace;
}
