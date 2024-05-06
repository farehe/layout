

export const API_MESSAGES = {
    SUCCESS: {
        SIGNUP: "Signup successful",
        LOGIN: "Login successful",
        LOGOUT: "Logout successful",
        GET_USER: "User fetched successfully",
        UPDATE_USER_PROFILE: "User profile updated successfully",
        DELETE_USER: "User deleted successfully",
        GET_ALL_USERS: "All users fetched successfully",
        GET_USER_BY_ID: "User fetched",
        CREATE_CAT: "Category created successfully",

        CHANGE_PASSWORD: "Password changed successfully",
        FORGOT_PW_EMAIL_SENT: "Please check your email for the verification code",
        PASSWORD_RESET: "Password reset successful",
        UPLOAD_USER_PROFILE_IMAGE: "Profile image uploaded successfully",
    },
    ERROR: {
        SIGNUP: "Signup failed",
        LOGIN: "Email or password is incorrect",
        LOGOUT: "Logout failed",
        GET_USER: "User fetch failed",
        UPDATE_USER: "User update failed",
        DELETE_USER: "User delete failed",
        DEFAULT: "Something went wrong",
        CHANGE_PASSWORD: "Password change failed",
        NETWORK: "Network error",
    }
} as const;