/**
 * Comprehensive Router Mocking Examples
 * Demonstrasi berbagai cara menggunakan router mocking
 */

import { createMockRouter, mockRouterForPage, routerScenarios } from "./router"

describe("Router Mock Examples", () => {
  describe("Basic Router Mocking", () => {
    it("should create basic mock router", () => {
      const mockRouter = createMockRouter()
      expect(mockRouter.isReady).toBe(true)
      expect(mockRouter.locale).toBe("id")
      expect(typeof mockRouter.push).toBe("function")
    })

    it("should override router properties", () => {
      const mockRouter = createMockRouter({
        pathname: "/custom",
        locale: "en",
      })
      expect(mockRouter.pathname).toBe("/custom")
      expect(mockRouter.locale).toBe("en")
    })
  })

  describe("Page-Specific Router Mocking", () => {
    it("should mock router for home page", () => {
      const homeRouter = routerScenarios.home()
      expect(homeRouter.route).toBe("/")
      expect(homeRouter.pathname).toBe("/")
    })

    it("should mock router for produk page with ID", () => {
      const produkRouter = routerScenarios.produk("123")
      expect(produkRouter.pathname).toBe("/produk")
      expect(produkRouter.query.produk).toBe("123")
    })

    it("should mock router for blog page with slug", () => {
      const blogRouter = routerScenarios.blog("my-blog-post")
      expect(blogRouter.pathname).toBe("/blog/[slug]")
      expect(blogRouter.query.slug).toBe("my-blog-post")
    })

    it("should mock router for auth pages", () => {
      const loginRouter = routerScenarios.auth_login()
      expect(loginRouter.pathname).toBe("/auth/login")

      const registerRouter = routerScenarios.auth_register()
      expect(registerRouter.pathname).toBe("/auth/register")
    })
  })

  describe("Router Mock Methods", () => {
    it("should mock router push method", () => {
      const mockRouter = createMockRouter()
      mockRouter.push("/new-page")
      expect(mockRouter.push).toHaveBeenCalledWith("/new-page")
    })

    it("should mock router replace method", () => {
      const mockRouter = createMockRouter()
      mockRouter.replace("/replaced-page")
      expect(mockRouter.replace).toHaveBeenCalledWith("/replaced-page")
    })

    it("should mock router back method", () => {
      const mockRouter = createMockRouter()
      mockRouter.back()
      expect(mockRouter.back).toHaveBeenCalled()
    })

    it("should mock router events", () => {
      const mockRouter = createMockRouter()
      mockRouter.events.on("routeChangeStart", jest.fn())
      expect(mockRouter.events.on).toHaveBeenCalledWith("routeChangeStart", expect.any(Function))
    })
  })

  describe("Router Query Parameters", () => {
    it("should handle query parameters", () => {
      const mockRouter = mockRouterForPage("/search", { q: "test", page: "2" })
      expect(mockRouter.query.q).toBe("test")
      expect(mockRouter.query.page).toBe("2")
    })

    it("should handle complex query objects", () => {
      const mockRouter = createMockRouter({
        query: {
          filter: "active",
          sort: "asc",
          limit: "10",
        },
      })
      expect(mockRouter.query).toEqual({
        filter: "active",
        sort: "asc",
        limit: "10",
      })
    })
  })

  describe("Router Locale Handling", () => {
    it("should mock router with locale", () => {
      const mockRouter = createMockRouter({
        locale: "en",
        locales: ["id", "en"],
        defaultLocale: "id",
      })
      expect(mockRouter.locale).toBe("en")
      expect(mockRouter.locales).toContain("en")
    })

    it("should handle multiple locales", () => {
      const mockRouter = createMockRouter({
        locales: ["id", "en", "es"],
        locale: "es",
      })
      expect(mockRouter.locales.length).toBe(3)
      expect(mockRouter.locale).toBe("es")
    })
  })

  describe("Router State Properties", () => {
    it("should have correct ready state", () => {
      const mockRouter = createMockRouter()
      expect(mockRouter.isReady).toBe(true)
    })

    it("should handle fallback and preview states", () => {
      const mockRouter = createMockRouter({
        isFallback: false,
        isPreview: false,
      })
      expect(mockRouter.isFallback).toBe(false)
      expect(mockRouter.isPreview).toBe(false)
    })

    it("should handle basePath", () => {
      const mockRouter = createMockRouter({
        basePath: "/app",
      })
      expect(mockRouter.basePath).toBe("/app")
    })
  })
})
