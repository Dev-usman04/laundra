
/**
 * Get tomorrow's date in YYYY-MM-DD format
  @returns {string} 
 */
export const getTomorrowDate = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
};

/**
 * Get the minimum delivery date (day after pickup)- Pickup date in YYYY-MM-DD format
 * @returns {string} 
 */
export const getMinDeliveryDate = (pickupDate) => {
  if (!pickupDate) return getTomorrowDate();
  const deliveryMin = new Date(pickupDate);
  deliveryMin.setDate(deliveryMin.getDate() + 1);
  return deliveryMin.toISOString().split('T')[0];
};

/**
 * Format date for display
 * @param {string} dateString 
 * @returns {string} 
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Check if a date is valid
 * @param {string} dateString - Date string to validate
 * @returns {boolean} True if valid
 */
export const isValidDate = (dateString) => {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date);
};