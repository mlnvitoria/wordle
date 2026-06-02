export function getKeyboardLayout() {
    return {
        default: [
            "Q W E R T Y U I O P",
              "A S D F G H J K L",
              "Z X C V B N M",
              "{bksp} {enter}"
        ]
    };
};

export function getKeyboardDisplay() {
    return {
        '{bksp}': 'Backspace',
        '{enter}': 'Send your Guess!',
    }
}