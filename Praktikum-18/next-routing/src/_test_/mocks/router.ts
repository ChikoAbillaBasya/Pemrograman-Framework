/**
 * Router Mock Utility for Testing
 * Provides configurable mocking for next/router's useRouter hook
 */

export const createMockRouter = (overrides = {}) => {
  const router = {
    route: "/",
    pathname: "/",
    query: {},
    asPath: "/",
    basePath: "",
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    prefetch: jest.fn(),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    isPreview: false,
    locale: "id",
    locales: ["id", "en"],
    defaultLocale: "id",
    ...overrides,
  }

  return router
}

/**
 * Mock router untuk halaman tertentu
 */
export const mockRouterForPage = (pathname: string, query: Record<string, any> = {}) => {
  return createMockRouter({
    route: pathname,
    pathname: pathname,
    asPath: pathname,
    query: query,
  })
}

/**
 * Setup mock next/router di semua test files
 */
export const setupRouterMock = (routerConfig = {}) => {
  jest.mock("next/router", () => ({
    useRouter: () => createMockRouter(routerConfig),
  }))
}

/**
 * Mock router dengan berbagai skenario
 */
export const routerScenarios = {
  home: () => mockRouterForPage("/", {}),
  profile: () => mockRouterForPage("/profile", {}),
  produk: (id?: string) => mockRouterForPage("/produk", id ? { produk: id } : {}),
  admin: () => mockRouterForPage("/admin", {}),
  auth_login: () => mockRouterForPage("/auth/login", {}),
  auth_register: () => mockRouterForPage("/auth/register", {}),
  blog: (slug?: string) => mockRouterForPage("/blog/[slug]", slug ? { slug: slug } : {}),
  editor: () => mockRouterForPage("/editor", {}),
}
