export interface CardProps {
    title: string;
    content: string;
  }
  export interface ButtonProps {
    label: string; // The text displayed on the button.
    size?: 'small' | 'medium' | 'large'; // The size of the button.
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full'; // The shape of the button.
    onClick?: () => void; // Optional onClick handler.
    className?: string; // Optional additional class names.
  }
  export interface PostProps {
    title: string;
    content: string;
    userId: number;
  }
  export interface UserProps {
    name: string;
    email: string;
    address: {
      street: string;
      city: string;
      zipcode: string;
    };
  }
  
  