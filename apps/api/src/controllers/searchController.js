import { ok, fail } from "../utils/response.js";
import { globalSearch } from "../services/searchService.js";

export async function search(req, res) {
  const query = req.query.q ?? "";
  if (query.length < 2) {
    return fail(res, "Search query must be at least 2 characters long.", 400);
  }
  return ok(res, await globalSearch(query));
}
