import JsCookie from 'js-cookie'
import NodeCookie from 'cookie'

export default class Cookie {
  /**
   * @param {Object} http
   * @param {import('http').IncomingMessage} http.req
   * @param {import('http').ServerResponse} http.res
   */
  constructor(http) {
    const { res, req } = http || {}
    if (res) {
      this.res = res
    }
    if (req) {
      this.req = req
    }
  }

  /**
   * @param {string} name
   */
  get(name) {
    let tokens
    if (this.req) {
      const cookies =
        this.req.headers && this.req.headers.cookie
          ? NodeCookie.parse(this.req.headers.cookie)
          : {}
      tokens = cookies[name]
    } else if (typeof window !== 'undefined') {
      tokens = JsCookie.get(name)
    } else {
      console.warn(
        'You are using eodiro Cookie get on server side without passing incoming message.'
      )
      return
    }

    try {
      return JSON.parse(tokens)
    } catch (err) {
      return tokens
    }
  }

  /**
   * @param {string} name
   * @param {string | Object} value
   * @param {Object} options
   * @param {Date} options.expires
   * @param {string} options.path
   */
  set(name, value, options) {
    if (this.res) {
      let cookie = `${name}=${value};`
      if (options.expires) {
        cookie += `Expires=${options.expires};`
      }
      if (options.path) {
        cookie += `Path=${options.path.replace(/'/g, '')};`
      }
      this.res.setHeader('Set-Cookie', [cookie])
    } else if (typeof window !== 'undefined') {
      JsCookie.set(name, value, {
        expires: options.expires,
        path: options.path
      })
    } else {
      console.warn(
        'You are using eodiro Cookie set on server side without passing server response object.'
      )
    }
  }

  /**
   * @param {string} name
   */
  remove(name) {
    if (this.res) {
      this.res.setHeader('Set-Cookie', [
        `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
      ])
    } else if (typeof window !== 'undefined') {
      JsCookie.remove(name)
    }
  }
}