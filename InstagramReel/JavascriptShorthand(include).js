const userAccess = (userRole) => {
  if (
    userRole === "admin" ||
    userRole === "manager" ||
    userRole === "editor" ||
    userRole === "ownwer"
  ) {
    return true;
  } else {
    return false;
  }
};

const userAccess = (userRole) => {
  const roles = ["admin", "manager", "editor", "owner"];
  return roles.includes(userRole);
};

console.log(userAccess("user"));
