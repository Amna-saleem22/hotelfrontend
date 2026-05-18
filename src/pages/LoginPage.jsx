import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Link,
  InputAdornment,
  IconButton,
  Divider,
  Checkbox,
  FormControlLabel,
  Alert,
  Stack,
  Avatar,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import DiamondIcon from "@mui/icons-material/Diamond";
import axiosInstance from "../api/axiosInstance";
import { useThemeMode } from "../context/ThemeContext";
import { getFormStyle } from "../theme/designSystem";

const GOLD = '#C9A96E';
const GOLD_DARK = '#A68550';
const GOLD_LIGHT_VAR = '#DFC085';

export default function LoginPage() {
  const navigate = useNavigate();
  const { isDark } = useThemeMode();

  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");
  const [formData, setFormData] = useState({ email: "", password: "", rememberMe: false });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ================= HANDLE INPUT =================
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: name === "rememberMe" ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setServerError("");
  };

  // ================= VALIDATION =================
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  // ================= LOGIN (original logic preserved) =================
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length) { setErrors(validationErrors); return; }
    try {
      setLoading(true);
      const res = await axiosInstance.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);
      const role = res.data.user.role;
      if (role === "admin") navigate("/admin");
      else if (role === "staff") navigate("/staff");
      else navigate("/dashboard");
    } catch (err) {
      setServerError(err.response?.data?.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  // ================= THEME-ADAPTIVE STYLES =================
  const textColor      = isDark ? '#F0EBE1'                    : '#1A1612';
  const textSecondary  = isDark ? 'rgba(240,235,225,0.65)'     : 'rgba(26,22,18,0.62)';
  const dividerColor   = isDark ? 'rgba(201,169,110,0.16)'     : 'rgba(201,169,110,0.24)';
  const cardBorderColor = `rgba(201,169,110,${isDark ? '0.2' : '0.26'})`;
  const iconColor      = `rgba(201,169,110,${isDark ? '0.72' : '0.82'})`;

  const bgGradient = isDark
    ? [
        'radial-gradient(ellipse at 15% 50%, rgba(201,169,110,0.07) 0%, transparent 55%)',
        'radial-gradient(ellipse at 85% 15%, rgba(201,169,110,0.05) 0%, transparent 50%)',
        'linear-gradient(135deg, #0A0908 0%, #100E0B 100%)',
      ].join(', ')
    : [
        'radial-gradient(ellipse at 15% 50%, rgba(201,169,110,0.13) 0%, transparent 55%)',
        'radial-gradient(ellipse at 85% 15%, rgba(201,169,110,0.09) 0%, transparent 50%)',
        'linear-gradient(135deg, #F7F4EF 0%, #EEE9E2 100%)',
      ].join(', ');

  const cardBg = isDark
    ? 'linear-gradient(150deg, rgba(18,15,10,0.98) 0%, rgba(12,10,7,0.98) 100%)'
    : 'linear-gradient(150deg, rgba(255,253,249,0.99) 0%, rgba(250,247,242,0.99) 100%)';

  const cardShadow = isDark
    ? '0 40px 100px rgba(0,0,0,0.65), 0 0 0 1px rgba(201,169,110,0.06), inset 0 1px 0 rgba(201,169,110,0.07)'
    : '0 40px 100px rgba(26,22,18,0.12), 0 0 0 1px rgba(201,169,110,0.08), inset 0 1px 0 rgba(255,255,255,0.9)';

  const fieldStyle = getFormStyle(isDark);

  // ================= ANIMATION VARIANTS =================
  const cardVariants = {
    hidden: { opacity: 0, y: 36, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };
  const stagger = (delay) => ({
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  });
  const slideIn = (delay) => ({
    hidden: { opacity: 0, x: -18 },
    visible: { opacity: 1, x: 0, transition: { delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  });

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: bgGradient,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 5,
        transition: 'background 0.35s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative corner accents */}
      <Box sx={{ position: 'absolute', top: 40, left: 40, width: 80, height: 80, border: `1px solid rgba(201,169,110,${isDark ? '0.1' : '0.15'})`, borderRadius: '50%', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: 40, right: 40, width: 120, height: 120, border: `1px solid rgba(201,169,110,${isDark ? '0.07' : '0.12'})`, borderRadius: '50%', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', top: '20%', right: '8%', width: 4, height: 4, borderRadius: '50%', background: GOLD, opacity: isDark ? 0.35 : 0.5, pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: '25%', left: '6%', width: 3, height: 3, borderRadius: '50%', background: GOLD, opacity: isDark ? 0.25 : 0.4, pointerEvents: 'none' }} />

      <Container maxWidth="sm">
        <motion.div variants={cardVariants} initial="hidden" animate="visible">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3.5, sm: 5 },
              background: cardBg,
              border: `1px solid ${cardBorderColor}`,
              borderRadius: 4,
              backdropFilter: 'blur(24px)',
              boxShadow: cardShadow,
            }}
          >
            {/* ---- Logo ---- */}
            <motion.div variants={stagger(0.12)} initial="hidden" animate="visible">
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1.5, gap: 1.5 }}>
                <Avatar
                  sx={{
                    bgcolor: `rgba(201,169,110,${isDark ? '0.1' : '0.12'})`,
                    border: `1.5px solid rgba(201,169,110,${isDark ? '0.28' : '0.35'})`,
                    width: 54,
                    height: 54,
                    boxShadow: `0 0 20px rgba(201,169,110,${isDark ? '0.12' : '0.1'})`,
                  }}
                >
                  <DiamondIcon sx={{ color: GOLD, fontSize: 26 }} />
                </Avatar>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: GOLD,
                    fontFamily: '"Playfair Display", Georgia, serif',
                    letterSpacing: '0.1em',
                    fontSize: '1.15rem',
                  }}
                >
                  LUXURY STAY
                </Typography>
              </Box>

              {/* Gold divider line */}
              <Box
                sx={{
                  width: 52,
                  height: 1.5,
                  background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
                  mx: 'auto',
                  mb: 3,
                  opacity: 0.7,
                }}
              />
            </motion.div>

            {/* ---- Heading ---- */}
            <motion.div variants={stagger(0.2)} initial="hidden" animate="visible">
              <Typography
                variant="h5"
                align="center"
                sx={{
                  color: textColor,
                  mb: 0.75,
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 700,
                  fontSize: { xs: '1.5rem', sm: '1.7rem' },
                }}
              >
                Welcome Back
              </Typography>
              <Typography
                align="center"
                sx={{ color: textSecondary, mb: 3.5, fontSize: '0.9rem', lineHeight: 1.6 }}
              >
                Sign in to continue your luxury experience
              </Typography>
            </motion.div>

            {/* ---- Server Error ---- */}
            <AnimatePresence>
              {serverError && (
                <motion.div
                  key="server-error"
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                >
                  <Alert
                    severity="error"
                    onClose={() => setServerError("")}
                    sx={{
                      mb: 2.5,
                      borderRadius: 2,
                      backgroundColor: isDark ? 'rgba(198,40,40,0.12)' : 'rgba(198,40,40,0.08)',
                      border: '1px solid rgba(198,40,40,0.25)',
                      color: isDark ? '#ef9a9a' : '#c62828',
                      '& .MuiAlert-icon': { color: isDark ? '#ef9a9a' : '#c62828' },
                    }}
                  >
                    {serverError}
                  </Alert>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ---- Form ---- */}
            <form onSubmit={handleSubmit} noValidate>
              <Stack spacing={2.5}>

                {/* Email */}
                <motion.div variants={slideIn(0.28)} initial="hidden" animate="visible">
                  <TextField
                    fullWidth
                    name="email"
                    label="Email Address"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon sx={{ color: iconColor, fontSize: 20 }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={fieldStyle}
                  />
                </motion.div>

                {/* Password */}
                <motion.div variants={slideIn(0.36)} initial="hidden" animate="visible">
                  <TextField
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleChange}
                    error={!!errors.password}
                    helperText={errors.password}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon sx={{ color: iconColor, fontSize: 20 }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                            sx={{
                              color: textSecondary,
                              '&:hover': { color: GOLD, backgroundColor: `rgba(201,169,110,0.08)` },
                              transition: 'color 0.2s ease',
                            }}
                          >
                            {showPassword
                              ? <VisibilityOffIcon sx={{ fontSize: 20 }} />
                              : <VisibilityIcon sx={{ fontSize: 20 }} />
                            }
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={fieldStyle}
                  />
                </motion.div>

                {/* Remember Me */}
                <motion.div variants={stagger(0.43)} initial="hidden" animate="visible">
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        size="small"
                        sx={{
                          color: `rgba(201,169,110,0.4)`,
                          '&.Mui-checked': { color: GOLD },
                          '&:hover': { backgroundColor: 'rgba(201,169,110,0.07)' },
                        }}
                      />
                    }
                    label={
                      <Typography sx={{ color: textSecondary, fontSize: '0.875rem' }}>
                        Remember me
                      </Typography>
                    }
                  />
                </motion.div>

                {/* Sign In Button */}
                <motion.div
                  variants={stagger(0.5)}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                >
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={loading}
                    sx={{
                      background: loading
                        ? 'rgba(201,169,110,0.35)'
                        : `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_DARK} 100%)`,
                      color: '#1A1612',
                      py: 1.55,
                      fontWeight: 700,
                      fontSize: '1rem',
                      letterSpacing: '0.05em',
                      fontFamily: '"Inter", sans-serif',
                      borderRadius: 2,
                      boxShadow: loading ? 'none' : `0 8px 28px rgba(201,169,110,0.3)`,
                      '&:hover': {
                        background: `linear-gradient(135deg, ${GOLD_LIGHT_VAR} 0%, ${GOLD} 100%)`,
                        boxShadow: `0 14px 36px rgba(201,169,110,0.42)`,
                      },
                      '&.Mui-disabled': {
                        color: 'rgba(26,22,18,0.45)',
                      },
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    {loading ? "Signing In…" : "Sign In"}
                  </Button>
                </motion.div>

                {/* Divider */}
                <motion.div variants={stagger(0.56)} initial="hidden" animate="visible">
                  <Divider
                    sx={{
                      borderColor: dividerColor,
                      '&::before, &::after': { borderColor: dividerColor },
                    }}
                  >
                    <Typography sx={{ color: textSecondary, fontSize: '0.72rem', px: 1.5, letterSpacing: '0.08em' }}>
                      OR
                    </Typography>
                  </Divider>
                </motion.div>

                {/* Register link */}
                <motion.div variants={stagger(0.62)} initial="hidden" animate="visible">
                  <Typography align="center" sx={{ color: textSecondary, fontSize: '0.9rem' }}>
                    Don't have an account?{' '}
                    <Link
                      component={RouterLink}
                      to="/register"
                      sx={{
                        color: GOLD,
                        fontWeight: 600,
                        textDecoration: 'none',
                        '&:hover': { color: GOLD_LIGHT_VAR, textDecoration: 'underline' },
                        transition: 'color 0.2s ease',
                      }}
                    >
                      Create Account
                    </Link>
                  </Typography>
                </motion.div>

              </Stack>
            </form>
          </Paper>

          {/* Footer note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.5 }}
          >
            <Typography align="center" sx={{ color: textSecondary, fontSize: '0.78rem', mt: 2.5, lineHeight: 1.6 }}>
              By signing in you agree to our{' '}
              <Link href="/privacy" sx={{ color: `rgba(201,169,110,0.72)`, fontSize: 'inherit', '&:hover': { color: GOLD } }}>
                Privacy Policy
              </Link>
              {' '}and{' '}
              <Link href="/terms" sx={{ color: `rgba(201,169,110,0.72)`, fontSize: 'inherit', '&:hover': { color: GOLD } }}>
                Terms of Service
              </Link>
            </Typography>
          </motion.div>

        </motion.div>
      </Container>
    </Box>
  );
}
