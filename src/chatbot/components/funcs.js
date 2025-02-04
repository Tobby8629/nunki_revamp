export const closed = (func, navigate, route) => {
    navigate(route, {replace: true})
    func.actions.close()
  }