
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function TextButton({
    label = "Button",
    capitalize = false,
    onClick = null,
    variant = "text",
    sx = null,
    to = "",
    disabled = false,
    expanded = false
}) {
    const navigate = useNavigate();

    function internalClick() {
        if (onClick != null) return onClick();
        if (to != "") navigate(to);
    }

    return (
        <Button
            disabled={disabled}
            onClick={() => internalClick()}
            sx={{
                width: expanded == true ? "100%" : "auto",
                textTransform: !capitalize ? "capitalize" : "uppercase",
                ...sx
            }}
            variant={variant}
        >
            {label}
        </Button>
    );
}