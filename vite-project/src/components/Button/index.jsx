import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./Button.module.scss";

function Button({
    children,
    primary,
    bordered,
    rounded,
    size = "medium",
    href,
    disabled = false,
    loading = false,
    className,
    onClick,
    ...rest
}) {
    const classes = clsx(
        styles.button,
        styles[size],
        {
            [styles.primary]: primary,
            [styles.bordered]: bordered,
            [styles.rounded]: rounded,
            [styles.disabled]: disabled || loading,
        },
        className,
    );
    const handleClick = (e) => {
        if (disabled || loading) {
            e.preventDefault();
            return;
        }

        onClick?.(e);
    };
    const content = (
        <>
            <span className={loading ? styles.loadingContent : undefined}>
                {children}
            </span>

            {loading && <span className={styles.spinner}></span>}
        </>
    );
    if (href) {
        return (
            <a href={href} className={classes} onClick={handleClick} {...rest}>
                {content}
            </a>
        );
    }
    return (
        <button
            type="button"
            className={classes}
            disabled={disabled}
            onClick={handleClick}
            {...rest}
        >
            {content}
        </button>
    );
}
Button.propTypes = {
    children: PropTypes.node,
    primary: PropTypes.bool,
    bordered: PropTypes.bool,
    rounded: PropTypes.bool,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    href: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
};
export default Button;
